<?php

namespace App\Http\Controllers\Accounts;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Guest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Request as RequestModel;


use Illuminate\Support\Facades\Log;

class AccountsProfileController extends Controller
{
    //
    public function getAdminUser(Request $request)
    {   
       
        $account_admin_user = DB::table('users')->get(); 
        $current_user = Auth::user();
            
        return Inertia::render('Accounts/Accounts', [
            "users" => $account_admin_user,
            "current_user" => $current_user

        ]);
    }
    public function getGuestUser(Request $request)
    {
        

        $account_guest_user = DB::table('guests')->get(); 
        return Inertia::render('Accounts/Accounts', [
            "guests" => $account_guest_user
        ]);
    }

    public function editAdminUser(Request $request) {

        request()->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:guests,email',
        ]);    
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'birthday' => $request->birthday,
            'phone_number' => $request->phone_number,
            'role' => $request->role ?? 'administrator',          
        ]);
        
        return response()->json([
            'message' => 'Added  Successfully',
            'status' => $status,
            'code' => $code
        ], 200);

          
        try {
            $update_user = User::where('id', $request->user_id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'birthday' => $request->birthday,
                'phone_number' => $request->phone_number,
                'role' => $request->role ?? 'administrator',         
            ]);
    
            return redirect('/accounts')->with('success', ' ' . $update_user['name'] . ' Admin Account Updated Successfully');
        }
        catch(\Exception $error) {
            return redirect('/edit/user')->with('fail', $error->getMessage());
        }

    }
    public function editGuestUser(Request $request) {

        request()->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:guests,email',
        ]);    
        
        try {
            $update_guest = Guest::where('uid', $request->user_id)->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'birthday' => $request->birthday,  
                'password' => Hash::make($request->password),          
            ]);
    
            return redirect('/accounts')->with('success', ' ' . $update_guest['first_name'] .' '. $update_guest['last_name'] .' Guest Account Updated Successfully');
        }
        catch(\Exception $error) {
            return redirect('/edit/user')->with('fail', $error->getMessage());
        }

    }
}
