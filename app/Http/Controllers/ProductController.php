<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $phantrang2 = Product::orderBy('id_pro','DESC')->paginate(4);
        return response()->json($phantrang2);
       // return response()->json(Product::latest()->get());

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
        'name_pro'=>'required|max:100',
        'phanloai'=>'required|max:100',
        'mota'=>'required|max:255',
        

       ]);
        try {
            Product::create([
                'name_pro'=>$request->name_pro,
                'phanloai'=>$request->phanloai,
                'mota'=>$request->mota,
    
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
    public function show($id_pro)
    {
        //
    }
    public function fetchOne(Request $request , $id_pro)
    {
        $data = request()->all();
        $id = isset($data['id']) ? intval($data['id']) : (isset($id) ? $id : "");
        $dataJson = $this->AdsourcesRepository->show($id);
        return $this->response($dataJson ? $dataJson : null, "Succcess!", 200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id_pro)
    {
        
        return response()->json(Product::where("id_pro",$id_pro)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id_pro)
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
    public function destroy(Request $request,$id_pro)
    {
        
        Product::where("id_pro",$id_pro)->first()->delete();
        return response()->json('success');
    }
    
    
}