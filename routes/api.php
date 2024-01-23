<?php

use App\Http\Controllers\ChoiceController;
use App\Http\Controllers\TestController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('tests')->group(function () {
        Route::get('/', [TestController::class, 'index']);
        Route::get('/{test}', [TestController::class, 'show']);
    });

    Route::prefix('choices')->group(function () {
        Route::post('/{question}', [ChoiceController::class, 'store']);
        Route::patch('/{choice}', [ChoiceController::class, 'update']);
        Route::delete('/{choice}', [ChoiceController::class, 'destroy']);
    });

});
