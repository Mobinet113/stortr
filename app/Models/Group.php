<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'uid',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'users' => 'array',
    ];
}
