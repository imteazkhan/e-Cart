<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ShoppingCartsSeeder extends Seeder
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

        // Create shopping carts for some users
        $usersWithCarts = $users->random($users->count() * 0.3); // 30% of users have active carts

        foreach ($usersWithCarts as $user) {
            $cart = \App\Models\ShoppingCarts::create([
                'user_id' => $user->id,
            ]);

            // Add 1-5 items to each cart
            $itemCount = fake()->numberBetween(1, 5);
            $cartProducts = $products->random($itemCount);

            foreach ($cartProducts as $product) {
                \App\Models\CartItems::create([
                    'shopping_cart_id' => $cart->id,
                    'product_id' => $product->id,
                    'quantity' => fake()->numberBetween(1, 3),
                    'price' => $product->current_price ?? $product->price,
                ]);
            }
        }
    }
}
