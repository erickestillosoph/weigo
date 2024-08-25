<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;
use Illuminate\Support\Str;
class DBServiceModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $faker = Faker::create();
        foreach (range(1, 5) as $index) {
            DB::table('d_p_service_models')->insert([
                'uid' => Str::uuid(),
                'Amount' => $faker->randomFloat(2, 1000, 1000000),
                'Currency' => $faker->randomElement(['USD', 'EUR', 'GBP', 'JPY']),
                'Description' => $faker->sentence(),
                'Email' => $faker->unique()->safeEmail(),
                'ProcId' => $faker->word(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
