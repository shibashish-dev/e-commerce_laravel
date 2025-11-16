<?php

use App\Http\Controllers\CouponController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/reedem-coupon', [CouponController::class, 'reedem'])->name('coupon.reedem');
Route::post('/user/profile/upload/{user_id}' , [ProfileController::class, 'upload'])->name('profile.upload');
