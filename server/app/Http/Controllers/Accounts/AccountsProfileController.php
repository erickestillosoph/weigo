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
use Illuminate\Http\JsonResponse;


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

    public function editAdminUser(Request $request): JsonResponse {



        $messages = [        
            'name.required' => 'The name field is required.',
            'email.required' => 'The email field is required.',
            'phone_number.required' => 'The phone number field is required.',
            'birthday.required' => 'The birthday field is required.',
            'password.required' => 'The password field is required.',
            'role.required' => 'The role field is required.',
            'id.required' => 'The id field is required.',
        ];

        $data = $request->validate([     
            'id' => ['required', 'exists:users,id'],     
        ], $messages);
   

          
        try {
            
            $update_admin = DB::table('users')->where('id', $data['id'])->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'birthday' => $request->birthday,  
                'password' => Hash::make($request->password),          
                'role' => $request->role,
                'id' => $request->id
            ]);

            if ($update_admin) {
                return response()->json([
                    'message' => 'Updated Successfully',
                    'status' => 'success',
                    'code' => 200
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Unsuccessful Update',
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
    public function editGuestUser(Request $request): JsonResponse {

        $messages = [
            'first_name.required' => 'The first name field is required.',
            'last_name.required' => 'The last name field is required.',
            'email.required' => 'The email field is required.',
            'phone_number.required' => 'The phone number field is required.',
            'birthday.required' => 'The birthday field is required.',
            'password.required' => 'The password field is required.',
            'id.required' => 'The id field is required.',
        ];
    
  
        $data = $request->validate([
            'id' => ['required', 'exists:guests,id'],
        ], $messages);


        try {
            $update_guest = DB::table('guests')->where('id', $data['id'])->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'birthday' => $request->birthday,  
                'password' => Hash::make($request->password),          
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

    public function deleteAdminUser($id)
    {

        DB::table('users')->where('id', $id)->delete();
        if (DB::table('users')->where('id', $id)->exists()) {
            return back()->with('error', 'Item not deleted');
        }
        
        return back()->with('success', 'Item deleted successfully');
    }
    public function deleteGuestUser($id)
    {

        DB::table('guests')->where('id', $id)->delete();
        if (DB::table('guests')->where('id', $id)->exists()) {
            return back()->with('error', 'Item not deleted');
        }
        
        return back()->with('success', 'Item deleted successfully');
    }
}
