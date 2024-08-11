<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $table = 'services';
    protected $fillable = ['id','price','description','image','category'];

    public function getImage(){
        if($this->image){
            return asset('images/service/' . $this->image);
        }
        return false;
        
    }
}
