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
 
            Schema::create('d_p_billing_details', function (Blueprint $table) {
                $table->id();      
                // $table->unsignedBigInteger('credit_card_id')->unique();              
                // $table->foreign('credit_card_id')->references('id')->on('d_p_credit_cards')->onDelete('cascade');
                $table->foreignId('credit_card_id')->constrained('d_p_credit_cards')->onDelete('cascade');
                $table->string('FirstName');
                $table->string('MiddleName');
                $table->string('LastName');
                $table->string('Address1');
                $table->string('Address2');
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
        Schema::dropIfExists('d_p_billing_details');
    }
};
