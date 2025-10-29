<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');//folderName.filename frontend Blade file dikhane ke liye use hota hai.
    }

    public function handleLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
             $user = Auth::user();
             if ($user->role ===  "1") {
                return redirect()->route('admin.dashboard')->with('success', 'Welcome Admin!');
            } 
        }

        return back()->with('error', 'Invalid email or password!');
    }


}
