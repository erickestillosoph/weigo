<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class DPCreditCard extends Model
{
    use HasFactory;
    protected $table = 'd_p_credit_cards';

    protected $fillable = [
            'uid',
            'Amount',
            'Currency',
            'Description',
            'Email',
            'ProcId',
            'Param1',
            'Param2',
            'IpAddress',
            'UserAgent',
            'FirstName',
            'MiddleName',
            'LastName',
            'Address1',
            'Address2',
            'EmailBD',            
            'City',
            'State',
            'Country',
            'ZipCode',
            'TelNo'                    
    ];

  

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->uid)) {
                $model->uid = (string) \Str::uuid(); // or any other UID generation logic
            }
        });
    }

   public function billingDetails(): HasOne
   {
        return $this->hasOne(DPBillingDetails::class);
   }

}
