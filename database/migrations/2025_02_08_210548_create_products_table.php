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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Product name
            $table->text('description')->nullable(); // Product description
            $table->decimal('price', 10, 2); // Product price
            $table->integer('stock')->default(0); // Available stock
            $table->foreignId('category_id')->constrained()->onDelete('cascade'); // Category relation
            $table->string('image')->nullable(); // Product image path
            $table->string('slug')->unique(); // Product slug
            $table->json('gallery')->nullable(); // JSON field for product gallery
            $table->string('sku')->nullable(); // Product SKU
            $table->string('height')->nullable(); // Product height
            $table->string('width')->nullable(); // Product width
            $table->string('length')->nullable(); // Product length
            $table->string('weight')->nullable(); // Product weight
            $table->json('attributes')->nullable(); // JSON field for dynamic attributes (e.g., size, color)
            $table->boolean('status')->default(true); // Product availability
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
