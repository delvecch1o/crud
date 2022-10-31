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
    'in'=> 'nullable',
    'from' => 'nullable',
    'to' => 'nullable',
    
]);

if($validator->fails())
{
    return response()->json([
        'status'=>400,
        'errors'=>$validator->messages(),
        
    ]);
}

$temperatura = new Temperatura;
$in = $request->input('in');
$from = $request->input('from');
$to = $request->input('to');


if($from == 'celsius' && $to == 'fahrenheit') {
    
    $result = ($in * 9) /5 + 32;
    $temperatura->in = $in;
    $temperatura->from = $from;
    $temperatura->to = $to;
    $temperatura->result = $result; 
    $temperatura->save();
    return response()->json(["result" => $result]);
}

else if($from == 'fahrenheit' && $to == 'celsius') {

    $result = (($in - 32) * 5/9);
    $temperatura->in = $in;
    $temperatura->from = $from;
    $temperatura->to = $to;
    $temperatura->result = $result; 
    $temperatura->save();
    return response()->json(["result" => $result]);
    
}

else if($from == 'celsius' && $to == 'kelvin' ) {

    $result = ($in + 273.15); 
    $temperatura->in = $in;
    $temperatura->from = $from;
    $temperatura->to = $to;
    $temperatura->result = $result; 
    $temperatura->save();
    return response()->json(["result" => $result]);

}

else if($from == 'kelvin' && $to == 'celsius') {

     $result = ($in - 273.15) ;
     $temperatura->in = $in;
     $temperatura->from = $from;
     $temperatura->to = $to;
     $temperatura->result = $result; 
     $temperatura->save();
     return response()->json(["result" => $result]);
     
 }

else if($from == 'kelvin' && $to == 'fahrenheit') {

    $result = (($in - 273.15) * 9/5) + 32;
    $temperatura->in = $in;
    $temperatura->from = $from;
    $temperatura->to = $to;
    $temperatura->result = $result; 
    $temperatura->save();
    return response()->json(["result" => $result]);
    
}

else if($from == 'fahrenheit' && $to == 'kelvin') {

     $result = (($in - 32) * 5/9) + 273.15;
     $temperatura->in = $in;
     $temperatura->from = $from;
     $temperatura->to = $to;
     $temperatura->result = $result; 
     $temperatura->save();
     return response()->json(["result" => $result]);
     
 }


}
}
