<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fuel extends Model
{
    use HasFactory;
    protected $table = 'fuels';
    protected $fillable = ['id','price','description','image','category','title'];

    public function getImage(){
        if($this->image){
            return asset('images/fuel/' . $this->image);
        }
        return false;
    }
       
}
