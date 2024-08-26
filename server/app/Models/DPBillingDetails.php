<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class DPBillingDetails extends Model
{
    use HasFactory;

    protected $table = 'd_p_billing_details';

    protected $fillable = [            
            'credit_card_id',
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
    public function creditCard(): BelongsTo
    {
        return $this->belongsTo(DPCreditCard::class);
    }
    
}
