<?php

namespace App\Http\Controllers\Dragonpay;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePaymentRequest;
use App\Http\Requests\UpdatePaymentRequest;
use App\Models\Payment;
use Inertia\Inertia;
use App\Http\Resources\PaymentResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $payments = DB::table('d_p_payments')->get(); 
        return Inertia::render('Payment/Payment', [
            "d_p_payments" => $payments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaymentRequest $request): JsonResponse
    {
        //
    $payments = Payment::create($request->validated());
    $status = 'success';
    $code = 200;
    if (!$payments) {
        $status = 'error';
        $code = 500;
    }
    
    $token = $payments->createToken('api-token');

    return response()->json([
        'message' => 'Credit Card Information Added Successfully',
        'status' => $status,
        'code' => $code,
        'token' => $token->plainTextToken
    ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaymentRequest $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
