<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCreditCardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'Amount' => 'required|numeric',
            'Currency' => 'required|string',
            'Description' => 'required|string',
            'Email' => 'required|email',
            'ProcId' => 'required|string',
            'Param1' => 'required|string',
            'Param2' => 'required|string',
            'IpAddress' => 'required|string',
            'UserAgent' => 'required|string',
            'BillingDetails' => 'required|array',
            'BillingDetails.FirstName' => 'required|string',
            'BillingDetails.MiddleName' => 'required|string',
            'BillingDetails.LastName' => 'required|string',
            'BillingDetails.Address1' => 'required|string',
            'BillingDetails.Address2' => 'required|string',
            'BillingDetails.City' => 'required|string',
            'BillingDetails.Province' => 'required|string',
            'BillingDetails.Country' => 'required|string',            
            'BillingDetails.ZipCode' => 'required|string',
            'BillingDetails.TelNo' => 'required|string',
            'BillingDetails.Email' => 'required|string',
           
        ];
    }
}
