<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;
use Illuminate\Support\Str;
class DBCreditCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach (range(1, 5) as $index) {
            DB::table('d_p_credit_cards')->insert([
                'uid' => $faker->uuid,
                'Amount' => $faker->randomFloat(2, 1000, 1000000),
                'Currency' => $faker->randomElement(['USD', 'EUR', 'GBP', 'JPY']),
                'Description' => $faker->sentence(),
                'Email' => $faker->unique()->safeEmail(),
                'Param1' => $faker->sentence(),
                'Param2' => $faker->sentence(),
                'ProcId' => $faker->word(),
                'IpAddress' => $faker->ipv4(),
                'UserAgent' => $faker->userAgent(),
                'Billing_Details' => json_encode([
                    'FirstName' => $faker->firstName(),
                    'MiddleName' => $faker->firstName(),
                    'LastName' => $faker->lastName(),
                    'Address1' => $faker->streetAddress(),
                    'Address2' => $faker->secondaryAddress(),
                    'City' => $faker->city(),
                    'State' => $faker->state(),
                    'Country' => $faker->country(),
                    'ZipCode' => $faker->postcode(),
                    'TelNo' => $faker->phoneNumber(),
                    'Email' => $faker->unique()->safeEmail(),
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            
            ]);
        }
    }
}
