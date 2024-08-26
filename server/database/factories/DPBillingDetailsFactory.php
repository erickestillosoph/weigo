<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\DPBillingDetails;
use App\Models\DPCreditCard;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DPBillingDetails>
 */
class DPBillingDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = DPBillingDetails::class;
    public function definition(): array
    {
        return [                        
            'credit_card_id' => DPCreditCard::factory(),
            'FirstName' => $this->faker->firstName(),
            'MiddleName' => $this->faker->firstName(),
            'LastName' => $this->faker->lastName(),
            'Address1' => $this->faker->streetAddress(),
            'Address2' => $this->faker->secondaryAddress(),
            'City' => $this->faker->city(),
            'State' => $this->faker->state(),
            'Country' => $this->faker->country(),
            'ZipCode' => $this->faker->postcode(),
            'TelNo' => $this->faker->phoneNumber(),
            'EmailBD' => $this->faker->unique()->safeEmail(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
