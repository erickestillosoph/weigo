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
            'Currency' => 'required|string|max:5',
            'Description' => 'nullable|string|max:255',
            'Email' => 'required|email|max:255',
            'ProcId' => 'required|string',
            'Param1' => 'nullable|string|max:255',
            'Param2' => 'nullable|string|max:255',
            'IpAddress' => 'required|ip',
            'UserAgent' => 'required|string|max:255',
            'FirstName' => 'required|string',
            'MiddleName' => 'nullable|string',
            'LastName' => 'required|string',
            'Address1' => 'required|string',
            'Address2' => 'nullable|string',
            'City' => 'required|string',
            'State' => 'required|string',
            'Country' => 'required|string',
            'ZipCode' => 'required|string',
            'TelNo' => 'required|string',                     
            'EmailBD' => 'required|string',                     
        ];
    }
}
