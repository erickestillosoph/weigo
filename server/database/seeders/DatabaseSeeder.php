<?php

namespace Database\Seeders;
use App\Models\DBPayment;
use App\Models\DBPaymentGateway;
use App\Models\DBServiceModel;
use App\Models\DBCreditCard;
use App\Models\DPFilteredPayments;
use App\Models\DPPreSelectingPayments;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Erick',
            'email' => 'hover.erickestilloso@gmail.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time() 
        ]);      

        $this->call([
            DBServiceModelSeeder::class,
            DBCreditCardSeeder::class,
            DBPaymentSeeder::class,
            DBFilteredPaymentSeeder::class,
            DBPreSelectingPaymentSeeder::class,

        ]);
       
    }
}
