<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RomanosController extends Controller
{
    public function romanos(Request $request)
    {
        $in = $request->input('in');
        $from = $request->input('from');
        $to = $request->input('to');

    }


}

