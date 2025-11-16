<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class UserInformation extends Model implements HasMedia
{

    use InteractsWithMedia;
    protected $fillable = [
        'user_id',
        'date_of_birth',
        'phone_number',
        'gender',
        'profile',
        'address',

    ];
}
