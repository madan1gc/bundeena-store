<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StoreModel;
use Illuminate\Support\Facades\File;

class StoreController extends Controller
{

    public function index(){
        $products = StoreModel::orderBy('created_at', 'desc')->get();
        return view('admin.store.index',compact('products'));
    }
    public function create()
    {
        return view('admin.store.create');
    }

    public function store(Request $request)
    {
       
        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'publish' => false,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/store'), $imageName);
        }
        $data['image'] = $imageName;
        StoreModel::create($data);
        return redirect()->route('store');
    }
    public function delete($id){
        $data = StoreModel::find($id);
        $imagePath = public_path('images/store/' . $data->image);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $data->delete();
        return redirect()->route('store');
    }

    public function publish($id){
        $data = StoreModel::find($id);
        if($data->publish == 1){
            $data->publish = 0;
            $data->save();
            return redirect()->route('store');
        }
        $data->publish = 1;
        $data->save();
        return redirect()->route('store');
    }

    public function edit($id){
        $data = StoreModel::find($id);
        return view('admin.store.edit',compact('data'));
    }

    public function update(Request $request){
        $store = StoreModel::find($request->id);
        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $imagePath = public_path('images/store/' . $store->image);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/store'), $imageName);
            $data['image'] = $imageName;
        }
        $store->update($data);
        return redirect()->route('store');
        
    }

}
