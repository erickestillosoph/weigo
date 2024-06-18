<?php
namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Guest\AuthenticatedSessionController;
use App\Http\Controllers\Guest\ConfirmablePasswordController;
use App\Http\Controllers\Guest\EmailVerificationNotificationController;
use App\Http\Controllers\Guest\EmailVerificationPromptController;
use App\Http\Controllers\Guest\NewPasswordController;
use App\Http\Controllers\Guest\PasswordController;
use App\Http\Controllers\Guest\PasswordResetLinkController;
use App\Http\Controllers\Guest\RegisteredUserController;
use App\Http\Controllers\Guest\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

use Illuminate\Foundation\Application;

    Route::get('/weigo/register', [RegisteredUserController::class, 'create', HandlePrecognitiveRequests::class, HandlePrecognitiveRequests::class])
                ->name('register');

    Route::post('/weigo/register', [RegisteredUserController::class, 'store', HandlePrecognitiveRequests::class]);

    Route::get('/weigo/login', [AuthenticatedSessionController::class, 'create', HandlePrecognitiveRequests::class])
                ->name('login');

    Route::post('/weigo/login', [AuthenticatedSessionController::class, 'store', HandlePrecognitiveRequests::class]);

    Route::get('/weigo/forgot-password', [PasswordResetLinkController::class, 'create', HandlePrecognitiveRequests::class])
                ->name('password.request');

    Route::post('/weigo/forgot-password', [PasswordResetLinkController::class, 'store', HandlePrecognitiveRequests::class])
                ->name('password.email');

    Route::get('/weigo/reset-password/{token}', [NewPasswordController::class, 'create', HandlePrecognitiveRequests::class])
                ->name('password.reset');

    Route::post('/weigo/reset-password', [NewPasswordController::class, 'store', HandlePrecognitiveRequests::class])
                ->name('password.store');
    
    Route::post('/weigo/logout', [AuthenticatedSessionController::class, 'destroy', HandlePrecognitiveRequests::class])
                ->name('logout');


    Route::get('/weigo/verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('/weigo/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1', HandlePrecognitiveRequests::class])
                ->name('verification.verify');

    Route::post('/weigo/email/verification-notification', [EmailVerificationNotificationController::class, 'store', HandlePrecognitiveRequests::class])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('/weigo/confirm-password', [ConfirmablePasswordController::class, 'show', HandlePrecognitiveRequests::class])
                ->name('password.confirm');

    Route::post('/weigo/confirm-password', [ConfirmablePasswordController::class, 'store', HandlePrecognitiveRequests::class]);

    Route::put('/weigo/password', [PasswordController::class, 'update', HandlePrecognitiveRequests::class])->name('password.update');

   
