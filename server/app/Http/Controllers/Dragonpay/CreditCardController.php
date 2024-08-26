<?php

namespace App\Http\Controllers\Dragonpay;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCreditCardRequest;
use App\Http\Requests\UpdateCreditCardRequest;
use App\Models\DPCreditCard;
use App\Models\DPBillingDetails;
use App\Models\Guest;
use Inertia\Inertia;
use Illuminate\Http\Request;
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
        

    // $creditCard = DPCreditCard::create($request->validated());

    $creditCard = DPCreditCard::create([
        'Amount' => $request->input('Amount'),
        'Currency' => $request->input('Currency'),
        'Email' => $request->input('Email'),
        'Description' => $request->input('Description'),
        'ProcId' => $request->input('ProcId'),     
        'Param1' => $request->input('Param1'),     
        'Param2' => $request->input('Param2'),     
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


    // $billing = $creditCard->billingDetails()->create([
    //     'FirstName' => $request->FirstName,
    //     'MiddleName' => $request->MiddleName,
    //     'LastName' => $request->LastName,
    //     'Address1' => $request->Address1,
    //     'Address2' => $request->Address2,
    //     'City' => $request->City,
    //     'State' => $request->State,
    //     'Country' => $request->Country,
    //     'ZipCode' => $request->ZipCode,
    //     'TelNo' => $request->TelNo,
    //     'EmailBD' => $request->EmailBD
    // ]);

    // $billing = DPBillingDetails::create([           
    //     'FirstName' => $request->FirstName,
    //     'MiddleName' => $request->MiddleName,
    //     'LastName' => $request->LastName,
    //     'Address1' => $request->Address1,
    //     'Address2' => $request->Address2,
    //     'City' => $request->City,
    //     'State' => $request->State,
    //     'Country' => $request->Country,
    //     'ZipCode' => $request->ZipCode,
    //     'TelNo' => $request->TelNo,
    //     'EmailBD' => $request->EmailBD
    // ]);

    $status = 'success';
    $code = 200;
    
    if (!$creditCard) {
            $status = 'error';
            $message = $creditCard;
            $code = 500;
        }


    return response()->json([
        'credit_card' => $creditCard,        
        'message' => 'Credit Card Transaction is Successful',
        'status' => $status,
        'billing' => $billing,
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


    public function createCreditCard(Request $request)
    {

        // $creditCard = DPCreditCard::create($request->validated());

        $messages = [        
            'Amountrequired' => 'The Amount field is required.',
            'Email.required' => 'The Email field is required.',
            'Currency.required' => 'The Currency field is required.',        
            'ProcId.required' => 'The ProcId field is required.',
            'FirstName.required' => 'The FirstName field is required.',
            'MiddleName.required' => 'The MiddleName field is required.',
            'LastName.required' => 'The LastName field is required.',
            'Address1.required' => 'The Address1 field is required.',
            'Address2.required' => 'The Address2 field is required.',
            'City.required' => 'The City field is required.',
            'State.required' => 'The State field is required.',
            'Country.required' => 'The Country field is required.',
            'ZipCode.required' => 'The ZipCode field is required.',
            'TelNo.required' => 'The TelNo field is required.',
            'EmailBD.required' => 'The EmailBD field is required.',
        ];

        $data = $request->validate([     
            'uid' => ['required', 'exists:guests,uid'],     
            'Amount' => 'required|string|max:255',
            'Email' => 'required|string|lowercase|email|max:255',                    
            'Currency' => 'required|string|max:255',
            'ProcId' => 'required|string|max:255',
            'FirstName' => 'required|string|max:255',
            'MiddleName' => 'required|string|max:255',
            'LastName' => 'required|string|max:255',
            'Address1' => 'required|string|max:255',
            'Address2' => 'required|string|max:255',
            'City' => 'required|string|max:255',
            'State' => 'required|string|max:255',
            'Country' => 'required|string|max:255',
            'ZipCode' => 'required|string|max:255',
            'TelNo' => 'required|string|max:255',
            'EmailBD' => 'required|string|lowercase|email|max:255',  
            'Param1' => 'nullable|string|max:255',  // Param1 is now optional
            'Param2' => 'nullable|string|max:255',

        ], $messages);
                       
        // $guestUidExistsDB = DB::table('guests')->where('uid', $data['uid'])->exists();
        // $guestEmailExistsDB = DB::table('guests')->where('Email', $data['Email'])->exists();
        // $guestUidExistsDB = Guest::where('uid', $uid)->exists();
        $guestUidExistsDB = Guest::where('uid',  $data['uid'])->exists();

       if ($guestUidExistsDB) {
            $guest = DPCreditCard::create([
                'Amount' => $request->Amount,
                'Email' => $request->Email,
                'Currency' => $request->Currency,
                'Description' => $request->Description,
                'ProcId' => $request->ProcId,
                'Param1' => $request->Param1,
                'Param2' => $request->Param2,
                'FirstName' => $request->FirstName,
                'MiddleName' => $request->MiddleName,
                'LastName' => $request->LastName,
                'Address1' => $request->Address1,
                'Address2' => $request->Address2,
                'City' => $request->City,  
                'State' => $request->State,  
                'Country' => $request->Country,  
                'ZipCode' => $request->ZipCode,
                'TelNo' => $request->TelNo,
                'EmailBD' => $request->EmailBD, 
                'IpAddress' => $request->ip(),
                'UserAgent' => $request->header('User-Agent'),
            ]);

            if ($guest) {
                return response()->json([
                    'credit_card' => $guest,        
                    'message' => 'Credit Card Transaction is Successful',
                    'status' => 'success'
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Credit Card Transaction Failed',
                    'status' => 'error'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'Guest UID or Email does not exist',
                'status' => 'error'
            ], 400);
        }
    }

}
