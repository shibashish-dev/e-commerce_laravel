<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Auth;
use DB;
use Illuminate\Http\Request;
use Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();
        return view('admin.articles.index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.articles.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:articles',
            'content' => 'required',
            'image' => 'nullable|image',
            'status' => 'nullable|in:0,1',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->title);

        DB::beginTransaction();
        try {

            $article = new Article([
                'title' => $request->title,
                'user_id' => Auth::id(),
                'slug' => $slug,
                'content' => $request->content,
                'status' => $request->status,
            ]);

            $article->save();

            if ($request->hasFile('image')) {
                $image = $article->addMedia($request->file('image'))->toMediaCollection('articles');
                $article->image = $image->getUrl();
                $article->save();
            }

            DB::commit();

            return redirect()->route('article.index')->with('success', 'Article created successfully.');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Error creating category: ' . $e->getMessage());
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $article = Article::where('slug', $slug)->with('user')->first();

        return inertia('Articles/Article', ['article' => $article]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $article = Article::find($id);
        if (!$article) {
            return back()->with('error', 'Article not found.');
        }

        return view('admin.articles.edit', compact('article'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:articles,slug,' . $id,
            'content' => 'required',
            'image' => 'nullable|image',
            'status' => 'nullable|in:0,1',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->title);

        $article = Article::find($id);
        if (!$article) {
            return back()->with('error', 'Article not found.');
        }

        DB::beginTransaction();
        try {

            $article->title = $request->title;
            $article->slug = $slug;
            $article->content = $request->content;
            $article->status = $request->status;
            $article->save();

            if ($request->hasFile('image')) {
                if ($article->image) {
                    $article->clearMediaCollection('articles');
                }
                $image = $article->addMedia($request->file('image'))->toMediaCollection('articles');
                $article->image = $image->getUrl();
                $article->save();
            }

            DB::commit();

            return redirect()->route('article.index')->with('success', 'Article updated successfully.');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Error updating article: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::find($id);
        if (!$article) {
            return back()->with('error', 'Article not found.');
        }

        if ($article->image) {
            $article->clearMediaCollection('articles');
        }

        $article->delete();

        return redirect()->route('article.index')->with('success', 'Article deleted successfully.');

    }

    public function view()
    {
        $articles = Article::where('status', true)->get();
        return inertia('Articles/Articles', ['articles' => $articles]);
    }
}
