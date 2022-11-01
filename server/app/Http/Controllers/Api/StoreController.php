<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function index()
    {
        $stores = Store::all();

        foreach ($stores as $store) {
            $store->businessHours;
        }

        return response()->json([
            'data' => $stores,
        ]);
    }
}
