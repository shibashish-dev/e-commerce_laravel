<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use MichaelRubel\Couponables\Traits\HasCoupons;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use InteractsWithMedia,HasCoupons;

    protected $fillable = [
        'title',
        'description',
        'slug',
        'category_id',
        'price',
        'sku',
        'stock',
        'image',
        'gallery',
        'status',
        'height',
        'width',
        'length',
        'weight',
        'attributes',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function related_products()
    {
        return $this->hasMany(Product::class, 'category_id', 'category_id')->where('id', '!=', $this->id)->limit(4);
    }
}
