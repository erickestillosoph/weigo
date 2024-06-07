<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'd_p_payments';

    protected $fillable = [
            'amount',
            'txnid' ,
            'ccy',
            'description',
            'email',
            'merchantId',
            'password',
            'param2',
            'param1',
    ];
}
