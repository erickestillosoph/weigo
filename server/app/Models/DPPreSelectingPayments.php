<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DPPreSelectingPayments extends Model
{
    use HasFactory;

    protected $table = 'd_p_pre_selecting_payments';

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
