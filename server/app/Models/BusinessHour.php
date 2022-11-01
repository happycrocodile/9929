<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessHour extends Base
{
    use HasFactory;

    protected $table = 'business_hours';

    protected $fillable = [
        'monday_to_friday_open_at',
        'monday_to_friday_closes_at',
        'saturday_open_at',
        'saturday_closes_at',
    ];

    protected $casts = [
        'monday_to_friday_open_at' => 'datetime:H:i',
        'monday_to_friday_closes_at' => 'datetime:H:i',
        'saturday_open_at' => 'datetime:H:i',
        'saturday_closes_at' => 'datetime:H:i',
    ];

    public $timestamps = false;
}
