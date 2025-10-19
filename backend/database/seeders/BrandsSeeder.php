<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            ['name' => 'Apple', 'slug' => 'apple'],
            ['name' => 'Samsung', 'slug' => 'samsung'],
            ['name' => 'Nike', 'slug' => 'nike'],
            ['name' => 'Adidas', 'slug' => 'adidas'],
            ['name' => 'Sony', 'slug' => 'sony'],
            ['name' => 'Microsoft', 'slug' => 'microsoft'],
            ['name' => 'Dell', 'slug' => 'dell'],
            ['name' => 'HP', 'slug' => 'hp'],
        ];

        foreach ($brands as $brand) {
            \App\Models\Brands::create([
                'name' => $brand['name'],
                'slug' => $brand['slug'],
                'description' => "Official {$brand['name']} products",
                'is_active' => true,
                'website' => "https://www.{$brand['slug']}.com",
            ]);
        }

        // Create additional random brands
        \App\Models\Brands::factory(15)->create();
    }
}
