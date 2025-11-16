<?php

use App\Http\Controllers\CouponController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\CheckoutController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::resource('shop', ShopController::class);
Route::get('cart', [ShopController::class, 'cart'])->name('cart');
Route::get('product/{slug}', [ProductController::class,'show'])->name('product.show');
Route::inertia('wishlist', 'Shop/WishList/WishList')->name('wishlist');
Route::post('/verify-coupon', [CouponController::class, 'verify'])->name('verify.coupon');
Route::resource('checkout', CheckoutController::class);
Route::get('shop/{slug}', [ShopController::class,'slugShow'])->name('slug.show');
