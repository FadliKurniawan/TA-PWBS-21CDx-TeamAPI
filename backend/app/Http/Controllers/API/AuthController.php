<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\Stmt\TryCatch;

use function Pest\Laravel\assertInvalidCredentials;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $payload = $request->validated();
        
        try {
            $payload["password"] = Hash::make($payload["password"]);
            User::create($payload);
            return response()->json(["message" => "Account Berhasil
              Dibuat!"] ,200);
        } catch (\Exception $err) {
            Log::info("Register error =>".$err->getMessage());
            return response()->json(["message" => "Tolong Cek Kembali 
            Register Anda!"] ,500);
        }
    }   
    
    public function Login(Request $request){
        $payload = $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        
        try {
            $user = User::where("email", $payload["email"])->first();
            if($user){
                //cek password
                if(!Hash::check($payload["password"], $user->password)){
                    return response()->json(["status" => 401 , "message" => 
                    "InvalidCredentials"]);
                }

                $token = $user->createToken("web")->plainTextToken;
                $authRes = array_merge($user->toArray(),["token"=> $token ]);
                return response()->json(["message"=> "Login Berhasil!","user" =>
                $authRes]);
            }
        } catch (\Exception $err) {
                Log::info("Login error =>".$err->getMessage());
                return response()->json(["message" => "Tolong Cek Kembali 
                Login Anda!"] ,500);
        }
    }
}