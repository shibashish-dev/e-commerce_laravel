<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdController;
use App\Http\Controllers\AdvertisementController;

Route::resource('ads', AdvertisementController::class);
