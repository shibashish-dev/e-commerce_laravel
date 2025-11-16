<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\FeaturesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


Route::prefix('shop')->middleware(['auth','role:admin'])->group(function () {
    Route::resource('admin', AdminController::class);
    Route::resource('users', UserController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('product', ProductController::class)->except(['show']);
    Route::resource('coupons', CouponController::class);
    Route::resource('features', FeaturesController::class);
});
