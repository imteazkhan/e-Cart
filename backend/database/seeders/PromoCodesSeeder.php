<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PromoCodesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promoCodes = [
            [
                'code' => 'WELCOME10',
                'description' => 'Welcome discount for new customers',
                'type' => 'percentage',
                'value' => 10.00,
                'minimum_amount' => 50.00,
                'usage_limit' => 1000,
                'is_active' => true,
            ],
            [
                'code' => 'SAVE20',
                'description' => '20% off on orders over $100',
                'type' => 'percentage',
                'value' => 20.00,
                'minimum_amount' => 100.00,
                'usage_limit' => 500,
                'is_active' => true,
            ],
            [
                'code' => 'FLAT50',
                'description' => '$50 off on orders over $200',
                'type' => 'fixed',
                'value' => 50.00,
                'minimum_amount' => 200.00,
                'usage_limit' => 200,
                'is_active' => true,
            ],
        ];

        foreach ($promoCodes as $promoData) {
            \App\Models\PromoCodes::create(array_merge($promoData, [
                'starts_at' => now(),
                'expires_at' => now()->addMonths(6),
                'used_count' => 0,
            ]));
        }

        // Create additional random promo codes
        \App\Models\PromoCodes::factory(10)->create();
    }
}
