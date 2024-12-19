<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Space;
use App\Models\GroupRelationship;

class DashboardController extends Controller {
    public function show() {
        return Inertia::render('Dashboard');
    }

    public function index(Request $request) {
        // Get the User's ID.
        $userId = $request->user()->id;

        // Get the first Group ID that this user belongs to.
        $groupId = GroupRelationship::where('user_id', $userId)->first()->group_id;

        // Get all spaces belonging to the user's group.
        $spaces = Space::with('locations.items')
            ->where('group_id', $groupId)
            ->get();

        return response()->json($spaces);
    }
}
