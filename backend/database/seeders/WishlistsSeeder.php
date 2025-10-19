<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WishlistsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = \App\Models\User::all();
        $products = \App\Models\Product::all();

        if ($users->isEmpty() || $products->isEmpty()) {
            $this->command->warn('Users or Products not found. Please run UserSeeder and ProductSeeder first.');
            return;
        }

        // Create wishlists for users
        foreach ($users as $user) {
            $wishlistCount = fake()->numberBetween(0, 10);
            $selectedProducts = $products->random($wishlistCount);

            foreach ($selectedProducts as $product) {
                try {
                    \App\Models\Wishlists::create([
                        'user_id' => $user->id,
                        'product_id' => $product->id,
                    ]);
                } catch (\Exception $e) {
                    // Skip if duplicate (unique constraint)
                    continue;
                }
            }
        }
    }
}
