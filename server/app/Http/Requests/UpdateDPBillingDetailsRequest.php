<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDPBillingDetailsRequest extends FormRequest
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
            'FirstName' => [ 'required', 'max:16', 'string' ],
            'MiddleName' => [ 'required', 'max:16', 'string' ],
            'LastName' => [ 'required', 'max:16', 'string' ],
            'Address1' => [ 'required', 'max:50', 'string' ],
            'Address2' => [ 'required', 'max:50', 'string' ],
            'City' => [ 'required', 'max:16', 'string' ],
            'Province' => [ 'required', 'max:16', 'string' ],
            'Country' => [ 'required', 'max:16', 'string' ],
            'ZipCode' => [ 'required', 'max:16', 'string' ],
            'TelNo' => [ 'required', 'max:16', 'string' ],
            'EmailBD' => [ 'required', 'max:50', 'string' ],
        ];
    }
}
