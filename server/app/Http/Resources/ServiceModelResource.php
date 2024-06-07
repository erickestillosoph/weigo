<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceModelResource extends JsonResource
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
            'amount' => $this->amount,
            'txnid' => $this->txnid,
            'ccy' => $this->ccy,
            'description' => $this->description,
            'email' => $this->email,
            'merchantId' => $this->merchantId,
            'password' => $this->password,
            'param2' => $this->param2,
            'param1' => $this->param1,
            'created_at' => $this->created_at
        ];
    }
}
