<?php

namespace App\Http\Controllers;

use App\Models\Advertisement;
use App\Models\Category;
use App\Models\Feature;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::where('status', true)
        ->with(['products'])->get();

        $currentYear = date('Y');
        $currentQuarter = ceil(date('n') / 3);

        // Get the start and end dates of the current quarter
        $startDate = Carbon::create($currentYear, ($currentQuarter - 1) * 3 + 1, 1)->startOfMonth();
        $endDate = Carbon::create($currentYear, ($currentQuarter - 1) * 3 + 3, 1)->endOfMonth();
        $products = Product::where('status', true)->whereBetween('created_at', [$startDate, $endDate])->with('category')->get();

        $ads = Advertisement::where('status', true)->first();
        $recomended = Product::where('status', true)->orderBy('purchases','DESC')->inRandomOrder()->limit(4)->get();
        $features = Feature::where('status', true)->get();

        return Inertia::render('Home', ['products' => $products,'categories' => $categories, 'ads' => $ads, 'recomended' => $recomended, 'features' => $features]);
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
        // $category = Category::where('slug', $slug)->first();
        // $products = Product::where('category_id', $category->id)->with('category')->get();
        // return Inertia::render('Search/Products', ['query' => $slug, 'products' => $products ])->withViewData(['status' => 404]);

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

    public function search (Request $request,$query) {
        // $query = $request->query('q');

        // dd($query,$request);
        $products = Product::where('title', 'LIKE', "%{$query}%")
        ->orWhere('description', 'LIKE', "%{$query}%")
        ->orWhereHas('category', function ($q) use ($query) {
            $q->where('title', 'LIKE', "%{$query}%"); // Search by category name
        })
        ->with('category') // Eager load category
        ->get();

        if ($products->isEmpty()) {
            return Inertia::render('Search/Products', ['query' => $query, 'products' => [] ])->withViewData(['status' => 404]);
        }

        return Inertia::render('Search/Products', ['products' => $products, 'query' => $query]);
    }
}
