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
use Illuminate\Support\Facades\Log;
use App\Models\Guest;
use Illuminate\Http\Request;

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
    public function create(StorePaymentRequest $request): JsonResponse
    {
        //
        // $payments = Payment::create($request->validated());
        $payments = Payment::create([
            'Amount' => $request->input('Amount'),
            'Currency' => $request->input('Currency'),
            'Email' => $request->input('Email'),
            'Description' => $request->input('Description'),
            'ProcId' => $request->input('ProcId'),        
        ]);
        $status = 'success';
        $code = 200;
        if (!$payments) {
            $status = 'error';
            $code = 500;
        }
        return response()->json([
            'message' => 'Payment Information Transaction is Successful',
            'payments' => $request->all(),
            'status' => $status,
            'code' => $code,
        ], 200);
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaymentRequest $request)
    {
        //
    $payments = Payment::create($request->validated());
    return back()->with('success', 'Item deleted successfully');
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
     * Remove the specified resource from storage on the guest side
     */
    public function destroy($id)
    {

        DB::table('d_p_payments')->where('uid', $id)->delete();
        if (DB::table('d_p_payments')->where('uid', $id)->exists()) {
            return back()->with('error', 'Item not deleted');
        }
        
        return back()->with('success', 'Item deleted successfully');
    }
    // Remove the specified resource from storage on the dashboard admin
    public function delete(Payment $request)
    {
        $request->delete();
    }

    public function createPaymentGuest(Request $request)
    {

        $messages = [        
            'Amountrequired' => 'The Amount field is required.',
            'Email.required' => 'The Email field is required.',
            'Currency.required' => 'The Currency field is required.',        
            'ProcId.required' => 'The ProcId field is required.'                   
        ];

        $data = $request->validate([     
            'uid' => ['required', 'exists:guests,uid'],     
            'Amount' => 'required|string|max:255',
            'Email' => 'required|string|lowercase|email|max:255',                    
            'Currency' => 'required|string|max:255',
            'ProcId' => 'required|string|max:255',            
            'Description' => 'nullable|string|max:255',
        ], $messages);
                             
        $guestUidExistsDB = Guest::where('uid',  $data['uid'])->exists();

       if ($guestUidExistsDB) {
            $guest = Payment::create([
                'Amount' => $request->Amount,
                'Email' => $request->Email,
                'Currency' => $request->Currency,
                'ProcId' => $request->ProcId,               
                'Description' => $request->Description,               
            ]);

            if ($guest) {
                return response()->json([
                    'payment' => $guest,        
                    'message' => 'Payment Transaction is Successful',
                    'status' => 'success'
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Payment Transaction Failed',
                    'status' => 'error'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'Payment UID or Email does not exist',
                'status' => 'error'
            ], 400);
        }
    }
}
