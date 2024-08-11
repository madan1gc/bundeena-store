<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\FuelController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [IndexController::class, 'index'])->name('index');
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'loginPost']);
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
Route::middleware(['admin'])->group(function () {
    Route::get('/dashboard', [ProductController::class, 'index'])->name('dashboard');

    //route for offer
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create');
    Route::get('/product/get-data', [ProductController::class, 'getData'])->name('product.getData');
    Route::post('/product/store', [ProductController::class, 'store'])->name('product.store');
    Route::post('/product/delete/{id}', [ProductController::class, 'delete'])->name('product.delete');
    Route::get('/product/edit/{id}', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/product/update', [ProductController::class, 'update'])->name('product.update');
    Route::post('/product/publish/{id}', [ProductController::class, 'publish'])->name('product.publish');

    //route for store
    Route::get('/store', [StoreController::class, 'index'])->name('store');
    Route::get('/store/create', [StoreController::class, 'create'])->name('store.create');
    Route::post('/store/store', [StoreController::class, 'store'])->name('store.store');
    Route::post('/store/delete/{id}', [StoreController::class, 'delete'])->name('store.delete');
    Route::post('/store/publish/{id}', [StoreController::class, 'publish'])->name('store.publish');
    Route::get('/store/edit/{id}', [StoreController::class, 'edit'])->name('store.edit');
    Route::post('/store/update', [StoreController::class, 'update'])->name('store.update');

     //route for service
     Route::get('/service', [ServiceController::class, 'index'])->name('service');
     Route::get('/service/create', [ServiceController::class, 'create'])->name('service.create');
     Route::post('/service/store', [ServiceController::class, 'store'])->name('service.store');
     Route::post('/service/delete/{id}', [ServiceController::class, 'delete'])->name('service.delete');
     Route::post('/service/publish/{id}', [ServiceController::class, 'publish'])->name('service.publish');
     Route::get('/service/edit/{id}', [ServiceController::class, 'edit'])->name('service.edit');
     Route::post('/service/update', [ServiceController::class, 'update'])->name('service.update');

     //route for fuel
     Route::get('/fuel', [FuelController::class, 'index'])->name('fuel');
     Route::get('/fuel/create', [FuelController::class, 'create'])->name('fuel.create');
     Route::post('/fuel/store', [FuelController::class, 'store'])->name('fuel.store');
     Route::post('/fuel/delete/{id}', [FuelController::class, 'delete'])->name('fuel.delete');
     Route::post('/fuel/publish/{id}', [FuelController::class, 'publish'])->name('fuel.publish');
     Route::get('/fuel/edit/{id}', [FuelController::class, 'edit'])->name('fuel.edit');
     Route::post('/fuel/update', [FuelController::class, 'update'])->name('fuel.update');
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');


