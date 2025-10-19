<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewsSeeder extends Seeder
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

        // Create reviews for random products
        for ($i = 0; $i < 200; $i++) {
            \App\Models\Reviews::create([
                'user_id' => $users->random()->id,
                'product_id' => $products->random()->id,
                'rating' => fake()->numberBetween(1, 5),
                'title' => fake()->sentence(4),
                'comment' => fake()->paragraph(),
                'is_approved' => fake()->boolean(85),
                'helpful_count' => fake()->numberBetween(0, 25),
            ]);
        }
    }
}
