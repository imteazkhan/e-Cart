<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\promo_codes>
 */
class PromoCodesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => fake()->unique()->regexify('[A-Z]{4}[0-9]{4}'),
            'description' => fake()->sentence(),
            'type' => fake()->randomElement(['percentage', 'fixed']),
            'value' => fake()->randomFloat(2, 5, 50),
            'minimum_amount' => fake()->optional()->randomFloat(2, 50, 200),
            'usage_limit' => fake()->optional()->numberBetween(10, 1000),
            'used_count' => 0,
            'starts_at' => fake()->dateTimeBetween('-1 month', 'now'),
            'expires_at' => fake()->dateTimeBetween('now', '+6 months'),
            'is_active' => fake()->boolean(80),
        ];
    }
}
