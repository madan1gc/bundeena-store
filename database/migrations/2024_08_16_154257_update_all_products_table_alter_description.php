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
        Schema::table('store', function (Blueprint $table) {
             $table->text('description')->nullable()->change();
        });

        Schema::table('services', function (Blueprint $table) {
             $table->text('description')->nullable()->change();
        });

        Schema::table('fuels', function (Blueprint $table) {
             $table->text('description')->nullable()->change();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->text('description')->nullable()->change();
       });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
