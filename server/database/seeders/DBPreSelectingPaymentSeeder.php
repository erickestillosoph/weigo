<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;

class DBPreSelectingPaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach (range(1, 30) as $index) {
            DB::table('d_p_pre_selecting_payments')->insert([
                'amount' => $faker->word(),
                'txnid' => $faker->word(),
                'ccy' => $faker->word(),
                'description' => $faker->sentence(),
                'email' => $faker->unique()->safeEmail(),
                'merchantId' => $faker->word(),
                'password' => $faker->md5,
                'param2' => $faker->word(),
                'param1' => $faker->word(),
                'created_at' => Carbon::instance($faker->dateTimeBetween('now')),
                'updated_at' => Carbon::instance($faker->dateTimeBetween('now','+1 months'))
                
            ]);
        }
    }
}
