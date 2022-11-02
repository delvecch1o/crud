<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class RegistrosController extends Controller
{
    public function registros(){
        
        $user = Auth::user();
        $registrosMoedas = $user->moedas()->get();
        $registrosTemperaturas = $user->temperaturas()->get();

        return response()->json([
            'registrosMoedas'=> $registrosMoedas,
            'registrosTemperaturas' => $registrosTemperaturas,
        ]);

    }
}


