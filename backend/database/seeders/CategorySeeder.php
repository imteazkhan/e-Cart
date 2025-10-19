<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Electronics', 'slug' => 'electronics'],
            ['name' => 'Clothing', 'slug' => 'clothing'],
            ['name' => 'Home & Garden', 'slug' => 'home-garden'],
            ['name' => 'Sports & Outdoors', 'slug' => 'sports-outdoors'],
            ['name' => 'Books', 'slug' => 'books'],
            ['name' => 'Health & Beauty', 'slug' => 'health-beauty'],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create([
                'name' => $category['name'],
                'slug' => $category['slug'],
                'description' => "Category for {$category['name']} products",
                'is_active' => true,
                'sort_order' => 0,
            ]);
        }

        // Create subcategories
        $electronics = \App\Models\Category::where('slug', 'electronics')->first();
        if ($electronics) {
            $subcategories = [
                ['name' => 'Smartphones', 'slug' => 'smartphones'],
                ['name' => 'Laptops', 'slug' => 'laptops'],
                ['name' => 'Tablets', 'slug' => 'tablets'],
            ];

            foreach ($subcategories as $subcategory) {
                \App\Models\Category::create([
                    'name' => $subcategory['name'],
                    'slug' => $subcategory['slug'],
                    'parent_id' => $electronics->id,
                    'description' => "Subcategory for {$subcategory['name']}",
                    'is_active' => true,
                    'sort_order' => 0,
                ]);
            }
        }

        // Create additional random categories
        \App\Models\Category::factory(10)->create();
    }
}
