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
        Schema::create('d_p_filtered_payments', function (Blueprint $table) {
            $table->id();
            $table->string('amount');
            $table->string('txnid');
            $table->string('ccy');
            $table->string('description')->nullable();
            $table->string('email');
            $table->string('merchantId');
            $table->string('password');
            $table->string('param2');
            $table->string('param1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('d_p_filtered_payments');
    }
};
