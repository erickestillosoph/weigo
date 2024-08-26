<?php

namespace App\Http\Controllers\Dragonpay;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDPBillingDetailsRequest;
use App\Http\Requests\UpdateDPBillingDetailsRequest;
use App\Models\DPBillingDetails;
use App\Http\Resources\BillingDetailsResource;
use Illuminate\Support\Facades\DB;
class BillingDetails extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        // $billingDetails = DPBillingDetails::create([
        //     'FirstName' => $request->input('FirstName'),
        //     'MiddleName' => $request->input('MiddleName'),
        //     'LastName' => $request->input('LastName'),
        //     'Email' => $request->input('Email'),            
        //     'Address1' => $request->input('Address1'),
        //     'Address2' => $request->input('Address2'),            
        //     'City' => $request->input('City'),
        //     'State' => $request->input('State'),
        //     'Country' => $request->input('Country'),
        //     'ZipCode' => $request->input('ZipCode'),
        //     'TelNo' => $request->input('TelNo'),
        //     'created_at' => $this->created_at                              
        // ]);
        // $status = 'success';
        // $code = 200;
        // if (!$billingDetails) {
        //     $status = 'error';
        //     $code = 500;
        // }
        // return response()->json([
        //     'message' => 'Billing Details is Added Successfully',
        //     'status' => $status,
        //     'code' => $code
        // ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDPBillingDetailsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(DPBillingDetails $dPBillingDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DPBillingDetails $dPBillingDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDPBillingDetailsRequest $request, DPBillingDetails $dPBillingDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DPBillingDetails $dPBillingDetails)
    {
        //
    }
}
