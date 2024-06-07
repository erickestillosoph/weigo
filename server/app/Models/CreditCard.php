<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class CreditCard extends Model
{
    use HasFactory;
    protected $table = 'd_p_credit_cards';

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
            'firstName',
            'lastName',
            'address1',
            'address2',
            'city',
            'state',
            'country',
            'zipCode',
            'telNo',
           
    ];
}
