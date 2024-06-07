<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDPPreSelectingPaymentsRequest extends FormRequest
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
            'param1' => [ 'required', 'max:255', 'string' ]
        ];
    }
}
