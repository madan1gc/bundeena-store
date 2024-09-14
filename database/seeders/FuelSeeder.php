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
                'title' => 'label1',
                'price' => '10',
            ],
            [
                'title' => 'label2',
                'price' => '10',
            ],
            [
                'title' => 'label3',
                'price' => '10',
            ],
            [
                'title' => 'label4',
                'price' => '10',
            ],
            [
                'title' => 'label5',
                'price' => '10',
            ],
        ];
        DB::table('fuels')->insert($data);
    }
}
