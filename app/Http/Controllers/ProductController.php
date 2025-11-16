<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(10);
        return view('admin.products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return  view('admin.products.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'slug' => 'required|string|unique:products',
            'category' => 'required|exists:categories,id',
            'price' => 'required',
            'sku' => 'required|string|unique:products',
            'stock' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png',
            "height" => "required",
            "width" => "required",
            "weight" => "required",
            "length" => "required",
            "gallery" => "nullable|array",
            "gallery.*" => "image|mimes:jpg,jpeg,png",
        ]);

        $slug = Str::slug($request->slug ?? $request->title);
        DB::beginTransaction();

        try {

            $product = new Product([
                'title' => $request->title,
                'description' => $request->description,
                'slug' => $slug,
                'category_id' => $request->category,
                'price' => $request->price,
                'sku' => $request->sku,
                'stock' => $request->stock,
                'height' => $request->height,
                'width' => $request->width,
                'weight' => $request->weight,
                'length' => $request->length,
            ]);

            $product->save();

            if ($request->hasFile('image')) {
                $image = $product->addMedia($request->file('image'))->toMediaCollection('products');
                $product->image = $image->getUrl();
                $product->save();
            }

            if ($request->hasFile('gallery')) {
                $galleryUrls = [];

                foreach ($request->file('gallery') as $file) {
                    $gallery = $product->addMedia($file)->toMediaCollection('product_gallery');
                    $galleryUrls[] = $gallery->getUrl();
                }

                $product->gallery = json_encode($galleryUrls);
                $product->save();
            }


            DB::commit();
            return redirect()->route('product.index')->with('success', 'Product created successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            return back()->with('error', 'Error creating product: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $product = Product::where('slug', $slug)->with(['category','related_products.category'])->first();

        if (!$product) {
            return inertia('Error/NotFound')->toResponse(request())->setStatusCode(404);
        }
        return inertia('Shop/Product/Product', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::findOrFail($id);
        $categories = Category::where('status', true)->get();
        return view('admin.products.edit', compact('product', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'slug' => 'required|string|unique:products,slug,' . $id,
            'category' => 'required|exists:categories,id',
            'price' => 'required',
            'sku' => 'required|string|unique:products,sku,' . $id,
            'stock' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            "height" => "required",
            "width" => "required",
            "weight" => "required",
            "length" => "required",
            "gallery" => "nullable|array",
            "gallery.*" => "image|mimes:jpg,jpeg,png",
        ]);

        $slug = Str::slug($request->slug ?? $request->title);
        $product = Product::findOrFail($id);
        DB::beginTransaction();

        try {

            $product->title = $request->title;
            $product->description = $request->description;
            $product->slug = $slug;
            $product->category_id = $request->category;
            $product->price = $request->price;
            $product->sku = $request->sku;
            $product->stock = $request->stock;
            $product->height = $request->height;
            $product->width = $request->width;
            $product->weight = $request->weight;
            $product->length = $request->length;


            $product->save();

            if ($request->hasFile('image')) {

                if ($product->image) {
                    $product->clearMediaCollection('products');
                }

                $image = $product->addMedia($request->file('image'))->toMediaCollection('products');
                $product->image = $image->getUrl();
                $product->save();
            }


            if ($request->hasFile('gallery')) {
                $galleryUrls = [];

                if ($product->gallery) {
                    $product->clearMediaCollection('product_gallery');
                }

                foreach ($request->file('gallery') as $file) {
                    $gallery = $product->addMedia($file)->toMediaCollection('product_gallery');
                    $galleryUrls[] = $gallery->getUrl();
                }

                $product->gallery = json_encode($galleryUrls);
                $product->save();
            }

            DB::commit();
            return redirect()->route('product.index')->with('success', 'Product updated successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            return back()->with('error', 'Error updating product: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
