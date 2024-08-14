<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreModel extends Model
{
    use HasFactory;
    protected $table = 'store';
    protected $fillable = ['id','price','description','image','category','title'];

    public function getImage(){
        if($this->image){
            return asset('images/store/' . $this->image);
        }
        return false;
        
    }
}
