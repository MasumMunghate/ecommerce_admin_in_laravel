<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::get('/login', 'showLoginForm')->name('user.login.form');
    Route::post('/login', 'handleLogin')->name('user.login');
});

Route::middleware(['auth', 'isAdmin'])
    ->prefix('admin')
    ->controller(ProductController::class)
    ->group(function () {
        Route::get('/dashboard', 'dashboard')->name('admin.dashboard');

        Route::get('/products/create', 'addProduct')->name('products.create');
        Route::get('/products', 'listProducts')->name('products.list');

        Route::get('/create-notes', 'createNotes')->name('notes');
        Route::post('/create-notes', 'createNotes')->name('notes');
        Route::get('/create-sales', 'createSales')->name('sales');
        Route::post('/create-sales', 'createSales')->name('sales');
    });
