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
            'Amount' => $this->Amount,
            'Currency' => $this->Currency,
            'Description' => $this->Description,
            'Email' => $this->Email,
            'ProcId' => $this->ProcId,
            'created_at' => $this->created_at
        ];
    }
}
