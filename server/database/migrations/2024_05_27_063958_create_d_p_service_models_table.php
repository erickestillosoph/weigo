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
        Schema::create('d_p_service_models', function (Blueprint $table) {
            $table->id();
            $table->uuid('uid');
            $table->string('Amount');
            $table->string('Currency');
            $table->string('Description')->nullable();
            $table->string('Email');
            $table->string('ProcId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('d_p_service_models');
    }
};
