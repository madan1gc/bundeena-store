<?php

namespace App\Http\Controllers;
use App\Models\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    public function index()
    {
        $products = ProductModel::all();
        return view('admin.dashboard.index',compact('products'));
    }

    public function create()
    {
        return view('admin.dashboard.create');
    }

    public function store(Request $request)
    {
       
        $data = [
            'price' => $request->price,
            'description' => $request->description,
            'date' => $request->date,
            'category' => $request->category,
            'publish' => false,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('images/product'), $imageName);
        }
        $data['image'] = $imageName;
        ProductModel::create($data);
        return redirect()->route('product');
    }

    public function delete($id){
        $data = ProductModel::find($id);
        $imagePath = public_path('images/product/' . $data->image);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $data->delete();
        return redirect()->route('product');
    }

    public function edit($id){
        $product = ProductModel::find($id);
        return view('admin.dashboard.edit',compact('product'));
    }

    public function update(Request $request){
        $product = ProductModel::find($request->id);
        $data = [
            'price' => $request->price,
            'description' => $request->description,
            'date' => $request->date,
            'category' => $request->category,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $imagePath = public_path('images/product/' . $product->image);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('images/product'), $imageName);
            $data['image'] = $imageName;
        }
        $product->update($data);
        return redirect()->route('product');
        
    }

    public function publish($id){
        $product = ProductModel::find($id);
        if($product->publish == 1){
            $product->publish = 0;
            $product->save();
            return redirect()->route('product');
        }
        $product->publish = 1;
        $product->save();
        return redirect()->route('product');
    }

    
}
