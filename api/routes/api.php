<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CadastrarController;
use App\Http\Controllers\API\TemperaturaController;
use App\Http\Controllers\API\MoedasController;
use App\Http\Controllers\API\RomanosController;
use App\Http\Controllers\API\RegistrosController;

Route::post('/user', [CadastrarController::class, 'register']);
Route::post('login', [CadastrarController::class, 'login']);

// Route::post('temperatura', [TemperaturaController::class, 'temperatura']);





Route::middleware(['auth:sanctum'])->group(function (){
   
    Route::post('logout', [CadastrarController::class, 'logout']);
    Route::post('moedas', [MoedasController::class, 'moedas']);
    Route::post('temperatura', [TemperaturaController::class, 'temperatura']);
    Route::post('romanos', [RomanosController::class, 'romanos']);
    Route::get('registros', [RegistrosController::class, 'registros']);

});


/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

*/
