<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductModel;

class ApiController extends Controller
{
    public function index(){
        $products = ProductModel::all();
        $data = $products->map(function($product) {
            return [
                'price' => $product->price,
                'description' => $product->description,
                'image' => $product->getImage(),
                'from_date' => $product->from_date,
                'to_date' => $product->to_date,
                'category' => $product->category,
                'publish' => $product->publish,
            ];
        });
        
        return response($data,200);
       

    }
}
