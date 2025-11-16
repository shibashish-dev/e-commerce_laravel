<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;


Route::resource('article',ArticleController::class);


Route::get('/article/{slug}', [ArticleController::class, 'show'])->name('article.show');
Route::get('/articles', [ArticleController::class, 'view'])->name('article.view');
