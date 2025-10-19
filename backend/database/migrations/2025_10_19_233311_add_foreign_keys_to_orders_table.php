<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->foreign('promo_code_id')->references('id')->on('promo_codes')->onDelete('set null');
            $table->foreign('shipping_address_id')->references('id')->on('addresses')->onDelete('cascade');
            $table->foreign('billing_address_id')->references('id')->on('addresses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign(['promo_code_id']);
            $table->dropForeign(['shipping_address_id']);
            $table->dropForeign(['billing_address_id']);
        });
    }
};
