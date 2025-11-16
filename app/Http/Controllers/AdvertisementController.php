<?php

namespace App\Http\Controllers;

use App\Models\Advertisement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdvertisementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ads = Advertisement::all();
        return view('admin.ads.index', compact('ads'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.ads.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'nullable|image',
            'url' => 'nullable',
            'status' => 'required|boolean',
            'btn_text' => 'required',
        ]);

        DB::beginTransaction();

        try {

            $ad = new Advertisement([
                'title' => $request->title,
                'description' => $request->description,
                'url' => $request->url,
                'status' => $request->status,
                'btn_text' => $request->btn_text,
            ]);

            $ad->save();

            if ($request->hasFile('image')) {
                $image = $ad->addMedia($request->file('image'))->toMediaCollection('ads');
                $ad->image = $image->getUrl();
                $ad->save();
            }

            DB::commit();
            return redirect()->route('ads.index')->with('success', 'Advertisement created successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', "An error occurred while creating the advertisement: " . $e->getMessage());
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
        $ad = Advertisement::findOrFail($id);
        return view('admin.ads.edit', compact('ad'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'nullable|image',
            'url' => 'nullable',
            'status' => 'required|boolean',
            'btn_text' => 'required',
        ]);

        $ad = Advertisement::findOrFail($id);

        DB::beginTransaction();

        try {

            $ad->title = $request->title;
            $ad->description = $request->description;
            $ad->url = $request->url;
            $ad->status = $request->status;
            $ad->btn_text = $request->btn_text;

            if ($request->hasFile('image')) {
                $ad->clearMediaCollection('ads');
                $image = $ad->addMedia($request->file('image'))->toMediaCollection('ads');
                $ad->image = $image->getUrl();
            }

            $ad->save();

            DB::commit();
            return redirect()->route('ads.index')->with('success', 'Advertisement updated successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', "An error occurred while updating the advertisement: " . $e->getMessage());
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with('error', "An error occurred while updating the advertisement: " . $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $ad = Advertisement::findOrFail($id);

        if ($ad) {
            $ad->clearMediaCollection('ads');
        }

        $ad->delete();

        return redirect()->route('ads.index')->with('success', 'Advertisement deleted successfully');
    }
}
