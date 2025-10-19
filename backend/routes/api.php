<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Test route - very simple
Route::get('/test', function () {
    return response()->json([
        'message' => 'API is working!',
        'timestamp' => now(),
        'server' => $_SERVER['SERVER_NAME'] ?? 'unknown'
    ]);
});

// Health check route
Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // Admin only routes
    Route::middleware('admin')->group(function () {
        Route::get('/admin/dashboard', function () {
            return response()->json([
                'success' => true,
                'message' => 'Welcome to admin dashboard',
                'data' => [
                    'stats' => [
                        'total_users' => \App\Models\User::count(),
                        'total_orders' => 0, // You can add actual counts later
                        'total_products' => 0,
                    ]
                ]
            ]);
        });
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});