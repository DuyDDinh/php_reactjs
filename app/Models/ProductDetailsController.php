<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Product;
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
        $this->validate($request,[
            'image'=>'required|max:100',
            'link'=>'required|max:100',
            'userpass'=>'required|max:100',
            'product_id'=>'required|max:10',

        ]);
        try {
            Productdetails::create([
                'image'=>$request->image,
                'link'=>$request->link,
                'userpass'=>$request->userpass,
                'product_id'=>$request->product_id,
    
            ]);
            return response()->json('successfully created');
        } catch (Exception $e) {
            return response()->json('failed create');

        }
       
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
    public function destroy($id_pro)
    {
        // Product::whereId($id_pro)->first()->delete();

        // return response()->json('success');
    }
    
    
}