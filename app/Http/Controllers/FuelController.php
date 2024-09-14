<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fuel;
use Illuminate\Support\Facades\File;

class FuelController extends Controller
{

    public function index(){
        $products = Fuel::orderBy('created_at', 'desc')->get();
        return view('admin.fuel.index',compact('products'));
    }
    public function update(Request $request){
        $ids = $request->input('id');
        $prices = $request->input('price'); 
        foreach ($ids as $index => $id) {
            $price = $prices[$index];
            $fuel = Fuel::find($id);
            $fuel->price = $price;
            $fuel->save();
        }
        
        return redirect()->route('fuel');
    }

}
