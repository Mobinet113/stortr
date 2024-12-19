<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\GroupRelationship;

class ItemController extends Controller {

    /**
     * Store a new item.
     */
    public function store(request $request) {

        // Validate the request.
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'tags' => 'nullable|array',
            'location_id' => 'required|integer',
        ]);

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Create the item.
        $item = Item::create([
            'name' => $request->name,
            'description' => $request->description,
            'location_id' => $request->location_id,
            'group_id' => $groupId,
            'user_id' => $userId,
        ]);

        return inertia('Dashboard', ['message' => 'Item created successfully.', 'data' => $item]);
    }
}
