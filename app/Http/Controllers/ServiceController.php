<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\File;

class ServiceController extends Controller
{

    public function index(){
        $products = Service::orderBy('created_at', 'desc')->get();
        return view('admin.service.index',compact('products'));
    }
    public function create()
    {
        return view('admin.service.create');
    }

    public function store(Request $request)
    {
       
        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'publish' => false,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/service'), $imageName);
        }
        $data['image'] = $imageName;
        Service::create($data);
        return redirect()->route('service');
    }
    public function delete($id){
        $data = Service::find($id);
        $imagePath = public_path('images/service/' . $data->image);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }
        $data->delete();
        return redirect()->route('service');
    }

    public function publish($id){
        $data = Service::find($id);
        if($data->publish == 1){
            $data->publish = 0;
            $data->save();
            return redirect()->route('service');
        }
        $data->publish = 1;
        $data->save();
        return redirect()->route('service');
    }

    public function edit($id){
        $data = Service::find($id);
        return view('admin.service.edit',compact('data'));
    }

    public function update(Request $request){
        $service = Service::find($request->id);
        $data = [
            'title' => $request->title,
            'description' => $request->description,
        ];
        $imageName=null;
        if ($request->hasFile('image')) {
            $imagePath = public_path('images/service/' . $service->image);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
            $image = $request->file('image');
            $imageName = 'img'. '_' . time(). rand(1,1000).  '.' .$image->getClientOriginalExtension();
            $image->move(public_path('images/service'), $imageName);
            $data['image'] = $imageName;
        }
        $service->update($data);
        return redirect()->route('service');
        
    }

}
