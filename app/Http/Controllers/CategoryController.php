<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::paginate(10);
        return view('admin.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.category.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // dd($request->all());

        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'slug' => 'required|string|unique:categories',
            'status' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->name);
        DB::beginTransaction();

        try {
            $category = new Category([
                'name' => $request->name,
                'description' => $request->description,
                'slug' => $slug,
                'status' => $request->status,
            ]);

            $category->save();

            if ($request->hasFile('image')) {
                $image = $category->addMedia($request->file('image'))->toMediaCollection('categories');
                $category->image = $image->getUrl();
                $category->save();
            }

            DB::commit();

            return redirect()->route('category.index')->with('success', 'Category created successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            return back()->with('error', 'Error creating category: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::findOrFail($id);
        return view('admin.category.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'slug' => "required|string|unique:categories,slug,$id",
            'status' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->name);
        $category = Category::findOrFail($id);

        DB::beginTransaction();

        try {
            $category->name = $request->name;
            $category->description = $request->description;
            $category->slug = $slug;
            $category->status = $request->status;

            if ($request->hasFile('image')) {
                if ($category->image) {
                    $category->clearMediaCollection('categories');
                }

                $image = $category->addMedia($request->file('image'))->toMediaCollection('categories');
                $category->image = $image->getUrl();
            }

            $category->save();
            DB::commit();

            return redirect()->route('category.index')->with('success', 'Category updated successfully.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Error updating category: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);

        if ($category->image) {
            $category->clearMediaCollection('categories');
        }

        if ($category) {
            $category->delete();
        }

        return redirect()->route('category.index')->with('success', 'Category deleted successfully.');
    }
}
