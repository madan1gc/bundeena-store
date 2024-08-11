<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/product', [ApiController::class, 'index']);
Route::get('/store', [ApiController::class, 'store']);
Route::get('/service', [ApiController::class, 'service']);
Route::get('/fuel', [ApiController::class, 'fuel']);
