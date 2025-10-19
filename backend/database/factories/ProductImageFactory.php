<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\product_image>
 */
class ProductImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => \App\Models\Product::factory(),
            'image_path' => fake()->imageUrl(800, 600, 'products'),
            'alt_text' => fake()->sentence(3),
            'is_primary' => fake()->boolean(20),
            'sort_order' => fake()->numberBetween(0, 10),
        ];
    }
}
