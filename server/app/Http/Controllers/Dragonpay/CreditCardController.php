<?php

namespace App\Http\Controllers\Dragonpay;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCreditCardRequest;
use App\Http\Requests\UpdateCreditCardRequest;
use App\Models\DPCreditCard;
use App\Models\DPBillingDetails;
use Inertia\Inertia;
use App\Http\Resources\CreditCardResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
class CreditCardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $billingDetails = DPCreditCard::with('billingDetails')->get();
        // return response()->json($billingDetails);
   
        $creditCard = DB::table('d_p_credit_cards')->get(); 
        $ipAddress = request()->ip();
        $userAgent = request()->header('User-Agent');
        return Inertia::render('Payment/CreditCard', [
            "d_p_credit_cards" => $creditCard,
            "detected_ip" => $ipAddress,
            "user_agent" => $userAgent  
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreCreditCardRequest $request)
    {
         


    $creditCard = DPCreditCard::create($request->validated());

    // Create the billing detail record
    $billingDetails = $creditCard->billingDetails()->create([
        'FirstName' => $request->input('FirstName'),
        'MiddleName' => $request->input('MiddleName'),
        'LastName' => $request->input('LastName'),
        'Address1' => $request->input('Address1'),
        'Address2' => $request->input('Address2'),
        'City' => $request->input('City'),
        'State' => $request->input('State'),
        'Country' => $request->input('Country'),
        'ZipCode' => $request->input('ZipCode'),
        'TelNo' => $request->input('TelNo'),
        'EmailBD' => $request->input('EmailBD'),
    ]);


    $status = 'success';
     $code = 200;
     
     if (!$creditCard) {
            $status = 'error';
            $message = $creditCard;
            $code = 500;
        }
     
    if (!$billingDetails) {
            $status = 'error';
            $message = $billingDetails;
            $code = 500;
        }

    return response()->json([
        'credit_card' => $creditCard,
        'billing_detail' => $billingDetails,
        'message' => 'Credit Card Transaction is Successful',
        'status' => $status,
        'code' => $code
    ], 201);


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCreditCardRequest $request)
    {

    $creditCard = DPCreditCard::create($request->validated());
    return back()->with('success', 'Item deleted successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(DPCreditCard $creditCard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DPCreditCard $creditCard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCreditCardRequest $request, DPCreditCard $creditCard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::table('d_p_credit_cards')->where('uid', $id)->delete();
        if (DB::table('d_p_credit_cards')->where('uid', $id)->exists()) {
            return back()->with('error', 'Item not deleted');
        }
        
        return back()->with('success', 'Item deleted successfully');
    }
}
