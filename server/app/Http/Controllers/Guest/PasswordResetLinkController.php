<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\WeigoResetPassword;
use Illuminate\Support\Facades\DB;
use App\Models\Guest; 
use Illuminate\Support\Facades\Log;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;

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

    public function sendResetLinkMail(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'exists:guests,email'],
        ]);
        $user = Guest::where('email', $data['email'])->first();
    
        if (!$user) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        $mail = new WeigoResetPassword($user);
        Mail::to($user->email)->send($mail);

        $uuid = DB::table('guests')->where('email', $data['email'])->value('uid');

        return response()->json(['token' => $uuid], 200);
    }
    


    public function resetPasswordMail(Request $request): JsonResponse {

        $messages = [           
            'password.required' => 'The password field is required.',
            'uid.required' => 'The id field is required.',
        ];
    
  
        $data = $request->validate([
            'uid' => ['required', 'exists:guests,uid'],                  
            'password' => ['required', Rules\Password::defaults()],
        ], $messages);


        try {
            $update_guest = DB::table('guests')->where('uid', $data['uid'])->update([                
                'password' => Hash::make($request->password),   
                'uid' => $request->uid       
            ]);
    
            if ($update_guest) {
                return response()->json([
                    'message' => 'Updated Successfully',
                    'status' => 'success',
                    'code' => 200
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Unsuccessful Update',
                    'status' => 'Error',
                    'code' => 500,             
                ], 500);
            }
            
        }
        catch (e){
            return response()->json([
                'message' => 'Unsuccessful Update',
                'code' => 500,             
            ], 500);
        }
        
    
    }



    // New code block for forgot and resetting password FOR AUTH ADMIN

    // public function forgotPassword (Request $request): JsonResponse{
    //     $request->validate(['email' => 'required|email']);
    //     $status = Password::sendResetLink($request->only('email'));
    //     return $status === Password::RESET_LINK_SENT
    //         ? response()->json(['status' => __($status)], 200)
    //         : response()->json(['email' => __($status)], 400);
    // }


    // public function resetPassword (Request $request): JsonResponse {
    //     $request->validate([
    //         'token' => 'required',
    //         'email' => 'required|email',
    //         'password' => 'required|min:8|confirmed',
    //     ]);
    //     $status = Password::reset(
    //         $request->only('email', 'password', 'password_confirmation', 'token'),
    //         function (User $user, string $password) {
    //             $user->forceFill(['password' => Hash::make($password)])->setRememberToken(Str::random(60));
    //             $user->save();
    //             event(new PasswordReset($user));
    //         }
    //     );
    //     return $status === Password::PASSWORD_RESET
    //         ? response()->json(['status' => __($status)], 200)
    //         : response()->json(['email' => __($status)], 400);
    // }


}
