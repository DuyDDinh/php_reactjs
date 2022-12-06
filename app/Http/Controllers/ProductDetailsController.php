<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Product;
use App\Models\Image;

use App\Models\Productdetails;


class ProductDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

       return response()->json(Productdetails::latest()->get());

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        
        if($request->hasFile('image')){

            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $image->move('images/',$name);
            Productdetails::create([
                'link'=>$request->link,
                'userpass'=>$request->userpass,
                'product_id'=>$request->product_id,
                'image'=>$name,
            ]);
          
            return response()->json(["message"=>'Upload successfully']);
        }

        return response()->json('plz try again');
     
        
  
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // return response()->json(User::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $user = User::whereId($id)->first();

        // $user->update([
        //     'name'=>$request->name,
        //     'password'=>$request->password,
        //     'email'=>$request->email,
        //     'phanquyen'=>$request->phanquyen,
        // ]);
        // return response()->json('update thanh cong');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_prodetail )
    {
        //Productdetails::whereId($id_prodetail )->first()->delete();
 
        Productdetails::where("id_prodetail",$id_prodetail)->first()->delete();
        return response()->json('success');
        // return response()->json('success');
    }
    
    
}