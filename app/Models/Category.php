<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = ['name', 'description', 'slug', 'status', 'image'];

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id','id');
    }
}
