<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->words(3, true);
        return [
            'name' => $name,
            'description' => fake()->paragraphs(3, true),
            'short_description' => fake()->sentence(),
            'sku' => fake()->unique()->regexify('[A-Z]{3}[0-9]{6}'),
            'price' => fake()->randomFloat(2, 10, 1000),
            'sale_price' => fake()->optional(0.3)->randomFloat(2, 5, 800),
            'stock_quantity' => fake()->numberBetween(0, 100),
            'category_id' => \App\Models\Category::factory(),
            'brand_id' => \App\Models\Brands::factory(),
            'weight' => fake()->randomFloat(2, 0.1, 50),
            'dimensions' => [
                'length' => fake()->randomFloat(2, 1, 100),
                'width' => fake()->randomFloat(2, 1, 100),
                'height' => fake()->randomFloat(2, 1, 100),
            ],
            'is_active' => fake()->boolean(90),
            'is_featured' => fake()->boolean(20),
            'meta_title' => $name,
            'meta_description' => fake()->sentence(),
            'slug' => \Illuminate\Support\Str::slug($name) . '-' . fake()->unique()->numberBetween(1000, 9999),
        ];
    }
}
