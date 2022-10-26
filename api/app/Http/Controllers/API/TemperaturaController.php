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
        'kelvin' => 'nullable',
        
        
    ]);

    if($validator->fails())
    {
        return response()->json([
            'status'=>400,
            'errors'=>$validator->messages(),
            
        ]);
    }

    $temperatura = new Temperatura; 
    $kelvin = $request->input('kelvin');
    $celsius = $request->input('celsius');
    $fahrenheit = $request->input('fahrenheit');
   
    
    if($celsius !== null) {
        
        $fahrenheit = ($celsius * 9)/5 + 32;
        $kelvin = ($celsius + 273.15);
        $temperatura->fahrenheit = $fahrenheit;
        $temperatura->kelvin = $kelvin;
        $temperatura->celsius = $celsius;
        $temperatura->save();
        return response()->json([
            'fahrenheit'=>$fahrenheit,
            'kelvin'=>$kelvin,
        ]);
    }
    else if($fahrenheit !== null) {
    
        $celsius = ($fahrenheit - 32) * 5/9 ;
        $kelvin = (($fahrenheit - 32) * 5/9) + 273.15;
        $temperatura->celsius = $celsius;
        $temperatura->fahrenheit = $fahrenheit;
        $temperatura->kelvin = $kelvin;
        $temperatura->save();
        return response()->json([
            'celsius'=>$celsius,
            'kelvin'=>$kelvin,
        ]);
    }

    else if($kelvin !== null) {

        $celsius = ($kelvin - 273.15);
        $fahrenheit = (($kelvin - 273.15) * 9/5) + 32;
        $temperatura->celsius = $celsius;
        $temperatura->fahrenheit = $fahrenheit;
        $temperatura->kelvin = $kelvin;
        $temperatura->save();
        return response()->json([
            'celsius'=>$celsius,
            'fahrenheit'=>$fahrenheit,
        ]);


    }
    

    
}
}
