<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Dragonpay\CreditCardController;
use App\Http\Controllers\Dragonpay\PaymentController;
use App\Http\Controllers\Dragonpay\ServiceModelController;
use App\Http\Controllers\Dragonpay\FilteredPaymentsController;
use App\Http\Controllers\Dragonpay\PreSelectingPaymentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))
    ->name('dashboard');

    // Credit Card Route
    Route::get('/credit-card', [CreditCardController::class, 'index'],fn() => Inertia::render('CreditCard'))
    ->name('credit-card');
    // Route::post('creditcard', [CreditCardController::class, 'store']);
    Route::post('credit-card', [CreditCardController::class, 'store', HandlePrecognitiveRequests::class]);
    // Route::resource('creditcard', CreditCardController::class);

    // Payment Route
    Route::get('/payments', [PaymentController::class, 'index'],fn() => Inertia::render('Payment'))
    ->name('payments');
    Route::post('payments', [PaymentController::class, 'store', HandlePrecognitiveRequests::class]);
    // Route::resource('payment', CreditCardController::class);
    
    // Service Model Route
    Route::get('/service-model', [ServiceModelController::class, 'index'],fn() => Inertia::render('ServiceModel'))
    ->name('service-model');
    Route::post('service-model', [ServiceModelController::class, 'store', HandlePrecognitiveRequests::class]);
    // Route::resource('servicemodel', ServiceModelController::class);
    
    // Filtering Payments Route
    Route::get('/filtering-payments', [FilteredPaymentsController::class, 'index'],fn() => Inertia::render('DPFilteredPayments'))
    ->name('filtering-payments');
    Route::post('filtering-payments', [FilteredPaymentsController::class, 'store', HandlePrecognitiveRequests::class]);

    // Pre Selecting Payments Route
    Route::get('/pre-selecting-payments', [PreSelectingPaymentsController::class, 'index'],fn() => Inertia::render('DPPreSelectingPayments'))
    ->name('pre-selecting-payments');
    Route::post('pre-selecting-payments', [PreSelectingPaymentsController::class, 'store', HandlePrecognitiveRequests::class]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
