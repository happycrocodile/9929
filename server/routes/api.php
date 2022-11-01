<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\MercadoPagoController;
use App\Http\Controllers\Api\StoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/products', [CategoryController::class, 'index']);
Route::get('/stores', [StoreController::class, 'index']);
Route::post('/create-preference', [MercadoPagoController::class, 'createPreference']);
Route::post('/register', [CustomerController::class, 'register']);
