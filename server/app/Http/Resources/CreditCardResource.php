<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CreditCardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'Amount' => $this->Amount,  
            'Currency' => $this->Currency,
            'Description' => $this->Description,
            'Email' => $this->Email,
            'ProcId' => $this->ProcId,
            'Param1' => $this->Param1,
            'Param2' => $this->Param2,
            'IpAddress' => $this->IpAddress,
            'UserAgent' => $this->UserAgent ,
            'Billing_Details' => $this->Billing_Details,            
            'created_at' => $this->created_at
        ];
    }
}
