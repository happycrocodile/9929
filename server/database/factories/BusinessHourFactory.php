<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BusinessHour>
 */
class BusinessHourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $format = chr(72) . chr(58) . chr(105);

        return [
            'monday_to_friday_open_at' => fake()->time($format),
            'monday_to_friday_closes_at' => fake()->time($format),
            'saturday_open_at' => fake()->time($format),
            'saturday_closes_at' => fake()->time($format),
        ];
    }
}
