<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\WeigoResetPassword;
use Illuminate\Support\Facades\DB;
use App\Models\Guest; 
use Illuminate\Support\Facades\Log;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Guest/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $status = Password::sendResetLink(
            $request->only('email')
        );
        
        if ($status == Password::RESET_LINK_SENT) {
            return back()->with('status', __($status));
        }
     
        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    public function sendResetLink(Request $request)
    {
        $emailParam = $request->query('email');
        $user = Guest::where('email', $emailParam)->first();
        if ($user) {
            $mail = new WeigoResetPassword($user);
            Mail::to($user->email)->send($mail);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}
