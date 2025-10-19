<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get existing categories and brands
        $categories = \App\Models\Category::all();
        $brands = \App\Models\Brands::all();

        if ($categories->isEmpty() || $brands->isEmpty()) {
            $this->command->warn('Categories or Brands not found. Please run CategorySeeder and BrandsSeeder first.');
            return;
        }

        // Create featured products
        $featuredProducts = [
            [
                'name' => 'iPhone 15 Pro',
                'sku' => 'IPH15PRO001',
                'price' => 999.99,
                'sale_price' => 899.99,
                'is_featured' => true,
            ],
            [
                'name' => 'Samsung Galaxy S24',
                'sku' => 'SGS24001',
                'price' => 849.99,
                'is_featured' => true,
            ],
            [
                'name' => 'MacBook Pro 16"',
                'sku' => 'MBP16001',
                'price' => 2499.99,
                'sale_price' => 2299.99,
                'is_featured' => true,
            ],
        ];

        foreach ($featuredProducts as $productData) {
            \App\Models\Product::create(array_merge($productData, [
                'description' => fake()->paragraphs(3, true),
                'short_description' => fake()->sentence(),
                'stock_quantity' => fake()->numberBetween(10, 100),
                'category_id' => $categories->random()->id,
                'brand_id' => $brands->random()->id,
                'weight' => fake()->randomFloat(2, 0.1, 5),
                'dimensions' => [
                    'length' => fake()->randomFloat(2, 10, 30),
                    'width' => fake()->randomFloat(2, 5, 20),
                    'height' => fake()->randomFloat(2, 1, 10),
                ],
                'is_active' => true,
                'meta_title' => $productData['name'],
                'meta_description' => fake()->sentence(),
                'slug' => \Illuminate\Support\Str::slug($productData['name']) . '-' . fake()->unique()->numberBetween(1000, 9999),
            ]));
        }

        // Create random products
        \App\Models\Product::factory(100)->create([
            'category_id' => fn() => $categories->random()->id,
            'brand_id' => fn() => $brands->random()->id,
        ]);
    }
}
