<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DPPayment>
 */
class DPPaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'amount' => fake()->sentence(),
            'txnid' => fake()->sentence(),
            'ccy' => fake()->sentence(),
            'description' => fake()->sentence(),
            'email' => fake()->sentence(),
            'merchantId' => fake()->sentence(),
            'password' => fake()->sentence(),
            'param2' => fake()->sentence(),
            'param1' => fake()->sentence(),
            'created_at' => 1,
            'updated_at' => 1,
        ];
    }
}
