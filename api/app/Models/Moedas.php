<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Moedas extends Model
{
    use HasFactory;
    protected $table = 'moedas';
    protected $fillable = [
        'in',
        'from',
        'to',
        'result',

    ];
}
