<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use RyanChandler\Comments\Concerns\HasComments;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Article extends Model implements HasMedia
{
    use InteractsWithMedia,HasComments;
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'content',
        'image',
        'is_published',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
