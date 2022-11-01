<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Product;
use Illuminate\Http\Request;

use MercadoPago;

class Data
{
    function __construct($property)
    {
        foreach ($property as $key => $value) {
            $this->$key = $value;
        }
    }
}

class MercadoPagoController extends Controller
{
    public function createPreference(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:customers,email',
            'items.*.id' => 'required|integer|exists:products,id',
        ]);

        MercadoPago\SDK::setAccessToken(config('services.mercadopago.access_token'));

        $customer = Customer::where('email', $request->email)->first();

        $payer = new MercadoPago\Payer();
        $payer->name = $customer->first_name;
        $payer->surname = $customer->last_name;
        $payer->email = $customer->email;

        $payer->phone = array(
          'area_code' => $customer->area_code,
          'number' => $customer->phone,
        );

        $payer->address = array(
          'street_name' => $customer->street_name,
          'street_number' => $customer->street_number,
          'zip_code' => $customer->zip_code,
        );

        $preference = new MercadoPago\Preference();

        $products = [];

        foreach ($request->items as $property) {

            $data = new Data($property);

            $product = Product::findOrFail($data->id);

            $item = new MercadoPago\Item();
            $item->id = $product->id;
            $item->title = $product->name;
            $item->description = $product->description;
            $item->category_id = $product->category_id;
            $item->quantity = 1;
            $item->unit_price = $product->unit_price;
            array_push($products, $item);
        }

        $preference->items = $products;

        $preference->payer = $payer;
        $preference->back_urls = [
            'success' => 'http://localhost:3000/feedbacks/success',
            'failure' => 'http://localhost:3000/feedbacks/failure',
            'pending' => 'http://localhost:3000/feedbacks/pending'
        ];

        $preference->auto_return = 'approved';

        $preference->save();

        return response()->json([
            'data' => [
                'preference_id' => $preference->id
            ]
        ]);
    }
}
