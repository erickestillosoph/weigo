<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('guests', function (Blueprint $table) {
            $table->id();
            $table->uuid('uid');
            $table->string('first_name');
            $table->string('last_name');
            $table->date('birthday')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('verification_token');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('guests_password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('guests_sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('guest_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('guest_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guests');
        Schema::dropIfExists('guests_password_reset_tokens');
        Schema::dropIfExists('guests_sessions');
    }
};
