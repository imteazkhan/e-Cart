<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->words(2, true);
        return [
            'name' => $name,
            'description' => fake()->sentence(),
            'slug' => \Illuminate\Support\Str::slug($name) . '-' . fake()->unique()->numberBetween(100, 999),
            'image' => fake()->imageUrl(400, 300, 'business'),
            'parent_id' => null,
            'is_active' => fake()->boolean(90),
            'sort_order' => fake()->numberBetween(0, 100),
            'meta_title' => $name,
            'meta_description' => fake()->sentence(),
        ];
    }
}
