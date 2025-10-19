<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddressesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = \App\Models\User::all();

        if ($users->isEmpty()) {
            $this->command->warn('No users found. Please create users first.');
            return;
        }

        foreach ($users as $user) {
            // Create 1-3 addresses per user
            $addressCount = fake()->numberBetween(1, 3);
            
            for ($i = 0; $i < $addressCount; $i++) {
                \App\Models\Addresses::create([
                    'user_id' => $user->id,
                    'type' => fake()->randomElement(['shipping', 'billing', 'both']),
                    'first_name' => fake()->firstName(),
                    'last_name' => fake()->lastName(),
                    'company' => fake()->optional()->company(),
                    'address_line_1' => fake()->streetAddress(),
                    'address_line_2' => fake()->optional()->secondaryAddress(),
                    'city' => fake()->city(),
                    'state' => fake()->state(),
                    'postal_code' => fake()->postcode(),
                    'country' => fake()->country(),
                    'phone' => fake()->phoneNumber(),
                    'is_default' => $i === 0, // First address is default
                ]);
            }
        }
    }
}
