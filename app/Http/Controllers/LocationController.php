<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\GroupRelationship;
use App\Models\Space;

class LocationController extends Controller {
    /**
     * Store a new location.
     */
    public function store(Request $request) {

        // Validate the request.
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'tags' => 'nullable|array',
            'space_id' => 'required|integer',
        ]);

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Verify that the space belongs to the user's group.
        $spaceId = $request->space_id;
        $spaceGroupId = Space::find($spaceId)->group_id;

        if ($spaceGroupId != $groupId) {
            return response()->json(['error' => 'Space does not belong to user\'s group.'], 403);
        }

        $location = Location::create([
            'name' => $request->name,
            'description' => $request->description,
            'tags' => $request->tags,
            'space_id' => $spaceId,
            'user_id' => $userId,
            'group_id' => $groupId,
        ]);

        // Return a success response with the new location.
        return inertia('Dashboard', ['message' => 'Location created successfully.', 'data' => $location]);
    }

    /**
     * Get all locations belonging to the logged in user.
     */
    public function index(Request $request) {

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;


        // If the $request has a space_id, filter the locations by that space.
        if ($request->space_id) {
            $locations = Location::where('group_id', $groupId)->where('space_id', $request->space_id)->get();
        } else {
            // Get all locations belonging to the user's group.
            $locations = Location::where('group_id', $groupId)->get();
        }

        return response()->json($locations);
    }

    /**
     * Get a location by ID.
     */
    public function show(Request $request, $id) {

        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Get the location.
        $location = Location::find($id);

        // Verify that the location belongs to the user's group.
        if ($location->group_id != $groupId) {
            return response()->json(['error' => 'Space does not belong to user\'s group.'], 403);
        }

        return response()->json($location);
    }
}
