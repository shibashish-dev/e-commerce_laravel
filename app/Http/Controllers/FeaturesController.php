<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use DB;
use Illuminate\Http\Request;
use Str;

class FeaturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $features = Feature::all();
        return view('admin.features.index', compact('features'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.features.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string|unique:features',
            'description' => 'required|string',
            'image' => 'nullable|image',
            'status' => 'required|boolean',
        ]);

        $slug = Str::slug($request->slug ?? $request->name);
        // dd($request->all(), $slug);

        DB::beginTransaction();

        try {
            $feature = new Feature([
                'name' => $request->name,
                'slug' => $slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            $feature->save();

            if ($request->hasFile('image')) {
                $image = $feature->addMedia($request->file('image'))->toMediaCollection('features');
                $feature->image = $image->getUrl();
                $feature->save();
            }

            DB::commit();

            return redirect()->route('features.index')->with('success', 'Feature created successfully.');
        } catch (\Exception $e) {
            \Log::error('Error creating feature: ' . $e->getMessage());
            DB::rollBack();
            return back()->with('error', 'Error creating feature: ' . $e->getMessage());
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
