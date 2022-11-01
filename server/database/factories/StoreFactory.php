<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->country(),
            'city' => fake()->city(),
            'street_name' => fake()->streetAddress(),
            'zip_code' => fake()->postcode(),
            'business_hour_id' => fake()->numberBetween(1, 4),
        ];
    }
}
