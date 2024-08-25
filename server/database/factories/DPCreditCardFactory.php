<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\CreditCard;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DPCreditCard>
 */
class DPCreditCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = CreditCard::class;
    public function definition(): array
    {
        return [
            'uid' => $this->faker->uuid,
            'Amount' => $this->faker->randomFloat(2, 1000, 1000000),
            'Currency' => $this->faker->word(),
            'Description' => $this->faker->sentence(),
            'Email' => $this->faker->unique()->safeEmail(),
            'ProcId' => $this->faker->word(),
            'IpAddress' => $this->faker->ipv4(),
            'UserAgent' => $this->faker->userAgent(),
            'Billing_Details' => [
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
                'Email' => $this->faker->unique()->safeEmail()
            ],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
