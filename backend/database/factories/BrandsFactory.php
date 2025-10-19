<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\brands>
 */
class BrandsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->company();
        return [
            'name' => $name,
            'description' => fake()->paragraph(),
            'logo' => fake()->imageUrl(200, 200, 'business'),
            'website' => fake()->url(),
            'is_active' => fake()->boolean(95),
            'slug' => \Illuminate\Support\Str::slug($name) . '-' . fake()->unique()->numberBetween(100, 999),
        ];
    }
}
