<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): JsonResponse
    {
        return $request->user()->hasVerifiedEmail()
                    ? response()->json(['message' => 'Login is Successfully'], 200)
                    : response()->json(['message' => 'Not Verified'], 401);

    }
}
