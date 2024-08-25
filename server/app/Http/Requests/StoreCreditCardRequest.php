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
            'Billing_Details' => 'required|array',
            'Billing_Details.FirstName' => 'required|string',
            'Billing_Details.MiddleName' => 'required|string',
            'Billing_Details.LastName' => 'required|string',
            'Billing_Details.Address1' => 'required|string',
            'Billing_Details.Address2' => 'required|string',
            'Billin_Details.City' => 'required|string',
            'Billing_Details.Province' => 'required|string',
            'Billing_Details.Country' => 'required|string',            
            'Billing_Details.ZipCode' => 'required|string',
            'Billing_Details.TelNo' => 'required|string',
            'Billing_Details.Email' => 'required|string',
           
        ];
    }
}
