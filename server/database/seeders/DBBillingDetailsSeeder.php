<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\DPCreditCard;
use Faker\Factory as Faker;
use Carbon\Carbon;
use Illuminate\Support\Str;
class DBBillingDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    
    public function run(): void
    {
        $faker = Faker::create();
        // $creditCardIds = DB::table('d_p_credit_cards')->pluck('id')->toArray();        
        $creditCardIds = DPCreditCard::pluck('id')->toArray();
        if (is_array($creditCardIds)) {
            foreach ($creditCardIds as $creditCardId) {
                DB::table('d_p_billing_details')->insert([                
                    'credit_card_id' => $creditCardId,
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
                    'EmailBD' => $faker->unique()->safeEmail(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        } else {
            // Handle the case where $creditCardIds is not an array
            throw new \Exception('CreditCard IDs should be an array.');
        }
    }
}
