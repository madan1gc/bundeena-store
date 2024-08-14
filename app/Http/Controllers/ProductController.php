<?php

namespace App\Http\Controllers;
use App\Models\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Str;



class ProductController extends Controller
{
    public function index()
    {
        $products = ProductModel::orderBy('created_at', 'desc')->get();
        foreach($products as $product){
            if($product->category === 'twofor'){
                $product->category = '2 For';
            }
        }
        return view('admin.dashboard.index',compact('products'));
    }
    public function getData()
    {
        $products = ProductModel::all(['id', 'image', 'price', 'description', 'from_date', 'to_date', 'category', 'publish']);
        return DataTables::of($products)->make(true);
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
            'from_date' => $request->from_date,
            'to_date' => $request->to_date,
            'category' => $request->category,
            'publish' => false,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/product'), $imageName);
        }
        $data['image'] = $imageName;
        ProductModel::create($data);
        return redirect()->route('dashboard');
    }

    public function delete($id){
        $data = ProductModel::find($id);
        $imagePath = public_path('images/product/' . $data->image);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $data->delete();
        return redirect()->route('dashboard');
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
            'from_date' => $request->from_date,
            'to_date' => $request->to_date,
            'category' => $request->category,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $imagePath = public_path('images/product/' . $product->image);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/product'), $imageName);
            $data['image'] = $imageName;
        }
        $product->update($data);
        return redirect()->route('dashboard');
        
    }

    public function publish($id){
        $product = ProductModel::find($id);
        if($product->publish == 1){
            $product->publish = 0;
            $product->save();
            return redirect()->route('dashboard');
        }
        $product->publish = 1;
        $product->save();
        return redirect()->route('dashboard');
    }

    
}
