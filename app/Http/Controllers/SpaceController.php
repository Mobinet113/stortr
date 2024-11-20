<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Space;
use App\Models\GroupRelationship;

class SpaceController extends Controller {

    /**
     * Store a new space.
     */
    public function store(Request $request) {

        // Validate the request.
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'tags' => 'nullable|array',
        ]);

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Create the space.
        Space::create([
            'name' => $request->name,
            'description' => $request->description,
            'group_id' => $groupId,
            'user_id' => $userId,
        ]);
    }
}
