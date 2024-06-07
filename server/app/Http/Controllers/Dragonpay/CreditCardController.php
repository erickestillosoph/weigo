<?php

namespace App\Http\Controllers\Dragonpay;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCreditCardRequest;
use App\Http\Requests\UpdateCreditCardRequest;
use App\Models\CreditCard;

use Inertia\Inertia;
use App\Http\Resources\CreditCardResource;
use Illuminate\Support\Facades\DB;
class CreditCardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
   
        $creditCard = DB::table('d_p_credit_cards')->get(); 
        return Inertia::render('Payment/CreditCard', [
            "d_p_credit_cards" => $creditCard
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
    public function store(StoreCreditCardRequest $request)
    {
     
    $creditCard = CreditCard::create($request->validated());
    $status = 'success';
    $code = 200;
    if (!$creditCard) {
        $status = 'error';
        $code = 500;
    }
    return response()->json([
        'message' => 'Credit Card Information Added Successfully',
        'status' => $status,
        'code' => $code
    ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(CreditCard $creditCard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CreditCard $creditCard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCreditCardRequest $request, CreditCard $creditCard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CreditCard $creditCard)
    {
        //
    }
}
