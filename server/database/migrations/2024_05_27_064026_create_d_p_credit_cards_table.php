<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('d_p_credit_cards', function (Blueprint $table) {
            $table->id();     
            $table->uuid('uid');
            $table->string('Amount');
            $table->string('Currency');
            $table->string('Description');
            $table->string('Email');           
            $table->string('ProcId');
            $table->string('Param1')->nullable();
            $table->string('Param2')->nullable();
            $table->string('IpAddress');
            $table->string('UserAgent');   
            $table->string('FirstName');
            $table->string('MiddleName')->nullable();
            $table->string('LastName');
            $table->string('Address1');
            $table->string('Address2')->nullable();
            $table->string('City');
            $table->string('State');
            $table->string('Country');
            $table->string('ZipCode');
            $table->string('TelNo');
            $table->string('EmailBD');                                   
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('d_p_credit_cards');
    }
};
