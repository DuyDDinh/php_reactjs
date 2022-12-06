<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
class ImageController extends Controller
{
    public function index(){
        return response()->json(
            Image::all()
        );
    }
    public function upload(Request $request){
        if($request->hasFile('image')){
            // $file =$request->file('image');
            // $filename = $file->getClientOriginalName();
            // $finalName=date('His').$filename;
            // $file ->move('image/',$finalName);
            // $request->file('image')->storeAs('images/', $finalName,'public');
            // Image::create(['name'=>$finalName]);

            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $image->move('images/',$name);
            Image::create(['name'=>$name]);
            return response()->json(["message"=>'Upload successfully']);
        }
        return response()->json('plz try again');
    }
}
