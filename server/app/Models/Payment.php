<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Payment extends Model
{
    use HasFactory, Notifiable, HasApiTokens;

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
