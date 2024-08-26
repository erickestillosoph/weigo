<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BillingDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        
        return [
            'id' => $this->id,
            'credit_card_id' => $this->credit_card_id,
            'FirstName' => $this->FirstName,
            'MiddleName' => $this->MiddleName,
            'LastName' => $this->LastName,
            'Address1' => $this->Address1,
            'Address2' => $this->Address2,
            'City' => $this->City,
            'State' => $this->State,
            'Country' => $this->Country,
            'ZipCode' => $this->ZipCode,
            'TelNo' => $this->TelNo,
            'EmailBD' => $this->EmailBD,           
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
