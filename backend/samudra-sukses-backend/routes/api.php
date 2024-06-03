<?php
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'admin'])->group(function () {
Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::get('/admin/products/pending', [ProductController::class, 'pending']);
Route::patch('/admin/products/{product}/approve', [ProductController::class, 'approve']);

});
?>