<?php

namespace App\Http\Controllers\Guest;


use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Guest;
use Illuminate\Support\Facades\Log;



class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): JsonResponse
{

    $data = DB::table('guests')->get(); 
    return response()->json(['data' => $data, 'status' => session('status')]);
}


    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request): JsonResponse
     {
        $data = $request->validate([
            'email' => ['required', 'email', 'exists:guests,email'],
            'password' => ['required', 'min:6'],
        ]);

        $user = Guest::where('email', $data['email'])->first();
        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $guest = DB::table('guests')
        ->where('email', $data['email'])
        ->whereNotNull('email_verified_at')
        ->first();


        if (!$guest) {
            return response()->json(['message' => 'Email not Verified', 'guest' => $guest], 401);
        }

        $token = $user->createToken('token-name')->plainTextToken;
        return response()->json(['message' => 'Login is Successfully', 'user' => $user, 'token' =>$token, 'email verified at' => $guest->email_verified_at ], 200);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): JsonResponse
    {
        $user = $request->user();

        if ($user) {
            // Revoke all tokens...
            $user->tokens()->delete();

            Log::info('User logged out successfully: ', ['user_id' => $user->id]);

            return response()->json(['message' => 'Logout successfully'], 200);
        }

        return response()->json(['message' => 'User not authenticated'], 401);
    }
}
