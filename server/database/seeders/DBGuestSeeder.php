<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;
use App\Models\Guest;
class DBGuestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Guest::factory()->create([
            'name' => 'Erick',
            'email' => 'hover.erickestilloso@gmail.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time() 
        ]);   
    }
}
