<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::where('status', true)->with('products')->get();
        $products = Product::where('status', true)->with('category')->get();
        return inertia('Shop/Shop', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $product_category = Category::where('slug', $slug)->first();
        $products = $product_category ? Product::where('category_id', $product_category->id)->get() : [];
        $categories = Category::with('products')->get();

        return inertia('Shop/Shop', [
            'slug' => $slug,
            'products' => $products,
            'categories' => $categories
        ]);
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


    public function cart()
    {
        return inertia('Shop/Cart/Cart');
    }


    public function slugShow(string $slug)
    {
        $product_category = Category::where('slug', $slug)->first();
        $products = $product_category ? Product::where('category_id', $product_category->id)->get() : [];
        $categories = Category::with('products')->get();

        return inertia('Shop/Shop', [
            'slug' => $slug,
            'products' => $products,
            'categories' => $categories
        ]);
    }
}
