<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SpaceController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\ItemController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])->name('dashboard');
    Route::get('/dashboard/index', [DashboardController::class, 'index'])->name('dashboard.index');

    Route::get('/spaces', [SpaceController::class, 'index'])->name('spaces.index');
    Route::get('/locations', [LocationController::class, 'index'])->name('locations.index');
});

Route::controller(SpaceController::class)->group(function () {
    Route::post('/spaces', 'store')->name('spaces.store');
})->middleware(['auth', 'verified']);

Route::controller(LocationController::class)->group(function () {
    Route::post('/locations', 'store')->name('locations.store');
})->middleware(['auth', 'verified']);

Route::controller(ItemController::class)->group(function () {
    Route::post('/items', 'store')->name('items.store');
})->middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';
