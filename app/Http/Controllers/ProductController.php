<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return view('admin.product.index');
    }
    public function create()
    {
        return view('admin.product.create');
    }
    public function store(Request $request)
    {
        $data = [
            'price' => $request->price,
            'description' => $request->description,
            'date' => $request->date,
        ];
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('images/product'), $imageName);
        }
        $data['image'] = $imageName;
        ProductModel::create($data);
        return ('success');
    }
}
