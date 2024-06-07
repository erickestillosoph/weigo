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
    public function rules(): array
    {
        return [
            'amount' => [ 'required', 'min:1', 'string'],
            'txnid' => [ 'required', 'max:40', 'string' ],
            'ccy' => [ 'required', 'max:5', 'string' ],
            'description' => [ 'required','max:255', 'string'],
            'email' => [ 'required', 'max:255', 'email' ],
            'merchantId' => [ 'required', 'max:255', 'string' ],
            'password' => [ 'required','max:255', 'string'],
            'param2' => [ 'required', 'max:255', 'string' ],
            'param1' => [ 'required', 'max:255', 'string' ],
            'firstName' => [ 'required', 'max:255', 'string'],
            'lastName' => [ 'required', 'max:255', 'string' ],
            'address1' => [ 'required', 'max:255', 'string'],
            'address2' => [ 'required', 'max:255', 'string'],
            'city' => [ 'required','max:255', 'string'],
            'state' => [ 'required','max:255', 'string' ],
            'country' => [ 'required','max:255', 'string' ],
            'zipCode' => [ 'required', 'max:255', 'string' ], 
            'telNo' => [ 'required', 'max:255', 'string' ]
        ];
    }
}
