<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Data
{
    function __construct($property)
    {
        foreach ($property as $key => $value) {
            $this->$key = $value;
        }
    }
}

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sequence = [
            [
                'create_limit' => 13,
                'category_id' => 1,
                'image_prefix' => chr(98)
            ],
            [
                'create_limit' => 4,
                'category_id' => 2,
                'image_prefix' => chr(115)
            ],
            [
                'create_limit' => 4,
                'category_id' => 3,
                'image_prefix' => chr(112)
            ],
        ];

        foreach ($sequence as $property) {

            $data = new Data($property);

            for ($i = 1; $i < $data->create_limit; $i++) {
                Product::create([
                    'name' => trim(fake()->sentence(1), chr(46)),
                    'unit_price' => fake()->randomFloat(2, 800, 20000),
                    'description' => fake()->text(),
                    'image' => $data->image_prefix . $i . chr(46) . "jpg",
                    'category_id' => $data->category_id,
                ]);
            }
        }
    }
}
