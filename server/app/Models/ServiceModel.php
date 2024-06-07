<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceModel extends Model
{
    use HasFactory;
    protected $table = 'd_p_service_models';

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
