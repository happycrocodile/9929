<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:customers,email',
            'area_code' => 'required',
            'phone' => 'required',
            'street_name' => 'required',
            'street_number' => 'required|integer',
            'zip_code' => 'required|integer',
        ]);

        $customer = new Customer();
        $customer->first_name = $request->first_name;
        $customer->last_name = $request->last_name;
        $customer->email = $request->email;
        $customer->area_code = $request->area_code;
        $customer->phone = $request->phone;
        $customer->street_name = $request->street_name;
        $customer->street_number = $request->street_number;
        $customer->zip_code = $request->zip_code;

        $customer->save();

        return response()->json([
            'data' => [
                'customer_id' => $customer->id
            ]
        ]);
    }
}
