<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
// use App\Models\Guest;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use App\Mail\WeigoEmail;
use Illuminate\Support\Facades\Password;
use App\Models\Guest;
use Illuminate\Http\JsonResponse;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request):JsonResponse
    {

        $data = $request->validate([
            'email' => ['required', 'email', 'exists:guests,email'],
        ]);
        $user = Guest::where('email', $data['email'])->first();
    
        if (!$user) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        $mail = new WeigoEmail($user);
        Mail::to($user->email)->send($mail);

        return response()->json(['Message' => "Verification already sent"], 200);

    }
}
