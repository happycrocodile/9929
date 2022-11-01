<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        foreach ($categories as $category) {
            $category->products;
        }
        return response()->json([
            'data' => $categories
        ]);
    }
}
