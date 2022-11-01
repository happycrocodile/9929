<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Base
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'name',
    ];

    public function products() {
        return $this->hasMany(Product::class, 'category_id');
    }

    public $timestamps = false;
}
