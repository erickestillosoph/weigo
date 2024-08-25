<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\DPFilteredPayments;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DPFilteredPayments>
 */
class DPFilteredPaymentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = DPFilteredPayments::class;
    public function definition(): array
    {
        return [
            'uid' => (string) Str::uuid() ,
            'Amount' => $this->faker->randomFloat(2, 1000, 1000000),
            'Currency' => $this->faker->word(),
            'Description' => $this->faker->sentence(),
            'Email' => $this->faker->unique()->safeEmail(),
            'ProcId' => $this->faker->word(),
            'created_at' => 1,
            'updated_at' => 1,
        ];
    }
}
