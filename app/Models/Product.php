<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'name_pro' , 'mota' , 'phanloai','id_pro',
    ];
    protected $primaryKey = 'id_pro';
    protected $table = 'product';
}
