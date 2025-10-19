<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = \App\Models\Product::all();

        if ($products->isEmpty()) {
            $this->command->warn('No products found. Please run ProductSeeder first.');
            return;
        }

        foreach ($products as $product) {
            // Create 1-4 images per product
            $imageCount = fake()->numberBetween(1, 4);
            
            for ($i = 0; $i < $imageCount; $i++) {
                \App\Models\ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => fake()->imageUrl(800, 600, 'products'),
                    'alt_text' => $product->name . ' - Image ' . ($i + 1),
                    'is_primary' => $i === 0, // First image is primary
                    'sort_order' => $i,
                ]);
            }
        }
    }
}
