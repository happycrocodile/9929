<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Base
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'unit_price',
        'image',
        'category_id',
        'description',
    ];
}
