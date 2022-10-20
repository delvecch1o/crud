<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Temperatura;
use Illuminate\Support\Facades\Validator;

class TemperaturaController extends Controller
{

public function temperatura(Request $request)
{
    $validator = Validator::make($request->all(),[
        'celsius'=> 'nullable',
        'fahrenheit'=> 'nullable',
        
    ]);

    if($validator->fails())
    {
        return response()->json([
            'status'=>400,
            'errors'=>$validator->messages(),
            
        ]);
    }

    $temperatura = new Temperatura; 
    $celsius = $request->input('celsius');
    $fahrenheit = $request->input('fahrenheit');
    
    if($celsius !== null) {
        
        $fahrenheit = ($celsius * 9)/5 + 32;
        $temperatura->fahrenheit = $fahrenheit;
        $temperatura->celsius = $celsius;
        $temperatura->save();
        return response()->json([
            'fahrenheit'=>$fahrenheit
        ]);
    }
    else if($fahrenheit !== null) {
    
        $celsius = ($fahrenheit - 32) * 5/9 ;
        $temperatura->celsius = $celsius;
        $temperatura->fahrenheit = $fahrenheit;
        $temperatura->save();
        return response()->json([
            'celsius'=>$celsius
        ]);
    }
    
}
}
