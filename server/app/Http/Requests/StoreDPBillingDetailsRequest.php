<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDPBillingDetailsRequest extends FormRequest
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
            'credit_card_id' => 'required|exists:d_p_credit_cards,id',
            'FirstName' => 'required|string|max:255',
            'MiddleName' => 'nullable|string|max:255',
            'LastName' => 'required|string|max:255',
            'Address1' => 'required|string|max:255',
            'Address2' => 'nullable|string|max:255',
            'City' => 'required|string|max:255',
            'State' => 'required|string|max:255',
            'Country' => 'required|string|max:255',
            'ZipCode' => 'required|string|max:20',
            'TelNo' => 'required|string|max:20',
            'EmailBD' => 'required|email|max:255',
            
        ];
    }
}
