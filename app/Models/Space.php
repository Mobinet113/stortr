<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Space extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'group_id',
        'user_id',
        'name',
        'description',
    ];
}