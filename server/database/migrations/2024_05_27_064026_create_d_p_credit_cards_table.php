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
            $table->string('Param1');
            $table->string('Param2');
            $table->string('IpAddress');
            $table->string('UserAgent');
            $table->json('Billing_Details');                    
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
