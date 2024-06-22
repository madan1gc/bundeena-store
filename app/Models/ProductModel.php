<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = ['id','price','description','from_date','to_date','image','category','publish'];

    public function getImage(){
        if($this->image){
            return asset('images/product/' . $this->image);
        }
        return false;
        
    }

}
