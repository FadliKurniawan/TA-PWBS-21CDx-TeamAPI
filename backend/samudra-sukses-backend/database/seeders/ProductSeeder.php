<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'Ikan Tuna',
            'description' => 'Ikan tuna segar dari laut.',
            'price' => 100000,
            'stock' => 20
        ]);

        Product::create([
            'name' => 'Udang',
            'description' => 'Udang segar dari laut.',
            'price' => 75000,
            'stock' => 50
        ]);
    }
}
