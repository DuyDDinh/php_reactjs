<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productdetails extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'image' , 'link' , 'userpass', 'id' ,'product_id' ,
    ];
    protected $primaryKey = 'id_prodetail';
    protected $table = 'pro_details';
    public function danhmuc(){
        return $this->belongsTo('App\Models\Productdetails','id_pro','id_prodetail');
    }
}
