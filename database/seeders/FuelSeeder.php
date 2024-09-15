<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FuelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'E10 Unleaded',
                'price' => '10',
            ],
            [
                'title' => 'Unleaded 91',
                'price' => '10',
            ],
            [
                'title' => 'Premium Unleaded 95',
                'price' => '10',
            ],
            [
                'title' => 'Diesel',
                'price' => '10',
            ],
            [
                'title' => 'LPG',
                'price' => '10',
            ],
        ];
        DB::table('fuels')->insert($data);
    }
}
