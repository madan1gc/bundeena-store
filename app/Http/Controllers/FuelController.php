<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fuel;
use Illuminate\Support\Facades\File;

class FuelController extends Controller
{

    public function index(){
        $products = Fuel::all();
        return view('admin.fuel.index',compact('products'));
    }
    public function create()
    {
        return view('admin.fuel.create');
    }

    public function store(Request $request)
    {
       
        $data = [
            'price' => $request->price,
            'description' => $request->description,
            'category' => $request->category,
            'publish' => false,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/fuel'), $imageName);
        }
        $data['image'] = $imageName;
        Fuel::create($data);
        return redirect()->route('fuel');
    }
    public function delete($id){
        $data = Fuel::find($id);
        $imagePath = public_path('images/fuel/' . $data->image);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $data->delete();
        return redirect()->route('fuel');
    }

    public function publish($id){
        $data = Fuel::find($id);
        if($data->publish == 1){
            $data->publish = 0;
            $data->save();
            return redirect()->route('fuel');
        }
        $data->publish = 1;
        $data->save();
        return redirect()->route('fuel');
    }

    public function edit($id){
        $data = Fuel::find($id);
        return view('admin.fuel.edit',compact('data'));
    }

    public function update(Request $request){
        $fuel = Fuel::find($request->id);
        $data = [
            'price' => $request->price,
            'description' => $request->description,
            'category' => $request->category,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $imagePath = public_path('images/fuel/' . $fuel->image);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/fuel'), $imageName);
            $data['image'] = $imageName;
        }
        $fuel->update($data);
        return redirect()->route('fuel');
        
    }

}
