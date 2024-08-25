<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DPFilteredPayments extends Model
{
    use HasFactory;

    protected $table = 'd_p_filtered_payments';

    protected $fillable = [
            'uid',
            'Amount',
            'Currency',
            'Description',
            'Email',
            'ProcId'
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
}
