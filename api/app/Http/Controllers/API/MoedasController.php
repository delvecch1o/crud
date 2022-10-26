<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client as HttpClient;
use App\Models\Moedas;
use Illuminate\Support\Facades\Validator;


class MoedasController extends Controller
{
    
    public function moedas(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'in'=> 'nullable',
            'from' => 'nullable',
            'to' => 'nullable',
             
        ]);

        $from = $request->input('from');
        $to = $request->input('to');
        $in = $request->input('in');
        
        $httpClient = new HttpClient([ 'verify' => false ]);
        $data = json_decode($httpClient->get("https://economia.awesomeapi.com.br/${from}-${to}")
        ->getBody()->getContents());
        $result = $data[0]->bid * $in;
        
        $moedas = new Moedas;
        $moedas->in = $in;
        $moedas->from = $from;
        $moedas->to = $to;
        $moedas->result = $result;
        $moedas->save();
        return response()->json(["result"=> $result]);

    }

   

}



