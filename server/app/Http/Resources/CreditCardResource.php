<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\BillingDetailsResource;
class CreditCardResource extends JsonResource
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
            'uid' => $this->uid,
            'Amount' => $this->Amount,  
            'Currency' => $this->Currency,
            'Description' => $this->Description,
            'Email' => $this->Email,
            'ProcId' => $this->ProcId,
            'Param1' => $this->Param1,
            'Param2' => $this->Param2,
            'IpAddress' => $this->IpAddress,
            'UserAgent' => $this->UserAgent,
            'BillingDetails' => new BillingDetailsResource($this->whenLoaded('billingDetails'))            
        ];
    }
}
