<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__.'/admin.php';

Route::get('/',[HomeController::class, 'index'])->name('home');
Route::resource('home',HomeController::class)->except('index');
Route::get('/search/{query}', [HomeController::class, 'search'])->name('search');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('profile', ProfileController::class);
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::inertia('/about', 'About')->name('about');



Route::get('/contact', [ContactController::class, 'view'])->name('contact.view');
require __DIR__.'/auth.php';
require __DIR__.'/shop.php';
require __DIR__.'/frontend.php';
require __DIR__.'/ads.php';
require __DIR__.'/article.php';


Route::fallback(fn () => Inertia::render('Error/NotFound')->toResponse(request())->setStatusCode(404));
