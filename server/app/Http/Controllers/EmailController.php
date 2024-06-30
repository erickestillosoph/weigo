<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Guest;

class EmailController extends Controller
{
    public function verify(Request $request)
{
    $guest = Guest::findOrFail($request->id);

    if ($request->hash !== $guest->verification_token) {
        return response()->json(['message' => 'Invalid token', 'verification-token' => $guest->verification_token, 'hash' => $request->hash ], 400);
    }

    $guest->email_verified_at = now();
    $guest->save();

    return response()->json(['message' => 'Email verified successfully']);
}
}