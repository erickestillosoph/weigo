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
    

        $emailParam = $request->query('email');
        $user = Guest::where('email', $emailParam)->first();
        if ($user) {
            $mail = new WeigoEmail($user);
            Mail::to($user->email)->send($mail);
            return response()->json(['message' => 'Verification Sent'], 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}
