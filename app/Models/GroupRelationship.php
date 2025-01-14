<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GroupRelationship extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'group_id',
        'role',
    ];
}
