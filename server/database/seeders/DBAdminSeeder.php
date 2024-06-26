<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Carbon\Carbon;
use App\Models\User;
class DBAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      User::factory()->create([
            'name' => 'Erick',
            'birthday' => '1990-01-01',
            'phone_number' => '1234567890',
            'email' => 'hover.erickestilloso@gmail.com',
            'password' => bcrypt('password'),
            'email_verified_at' => time(),
            'role' => 'superadministrator'
        ]); 
    }
}
