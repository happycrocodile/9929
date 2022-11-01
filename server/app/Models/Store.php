<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Base
{
    use HasFactory;

    protected $table = 'stores';

    protected $fillable = [
        'name',
        'city',
        'street_name',
        'zip_code',
        'business_hour_id',
    ];

    public function businessHours() {
        return $this->belongsTo(BusinessHour::class, 'business_hour_id');
    }

    public $timestamps = false;
}
