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
        $space = Space::create([
            'name' => $request->name,
            'description' => $request->description,
            'group_id' => $groupId,
            'user_id' => $userId,
        ]);

        // Return a success response with the new space.
        return inertia('Dashboard', ['message' => 'Space created successfully.', 'data' => $space]);
    }

    /**
     * Get all spaces belonging to the logged in user.
     */
    public function index(Request $request) {

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Get all spaces belonging to the user's group.
        $spaces = Space::where('group_id', $groupId)->get();

        return response()->json($spaces);
    }

    /**
     * Get a space by ID.
     */
    public function show(Request $request, $id) {

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Get the space.
        $space = Space::find($id);

        // Verify that the space belongs to the user's group.
        if ($space->group_id != $groupId) {
            return response()->json(['error' => 'Space does not belong to user\'s group.'], 403);
        }

        return response()->json($space);
    }
}
