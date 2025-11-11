import api from '@/api/axios';
import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import HomePage from './HomePage';

const LoginPage = () => {
    const [showPassword,setShowPassword] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const navigate = useNavigate();
    async function handleLogin(){
        try {
            if(!username.trim() || !password.trim()){
                toast.error("All fields must be filled")
            }

            const res = await api.post("/login",{username,password});
            if(res.data.success){
                toast.success("User Logged In")
            }
            navigate("/home")
            
        } catch (error:any) {
            toast.error(error.response.data?.message || "Login failed");
        }
    }


  return (
    <div className='h-screen w-full bg-linear-to-br from-purple-300 via-purple-900 to-purple-950'>
      <div className='flex items-center min-h-screen justify-center'>
        <div className='max-w-full bg-white/20 shadow-2xl rounded-2xl backdrop-blur-2xl w-100 text-white'>
                <h3 className='p-3 text-2xl text-center'>Login</h3>

                <div className='p-6'>
                    <div className='p-3 px-10'>
                    <span className='block '>Username</span>
                    <input
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    onChange={(e:any)=>{setUsername(e.target.value)}}
                     type="text" />
                    </div>

                    <div className='p-3 px-10 relative'>
                    <span className='block'>Password</span>
                    <input
                    onChange={(e:any)=>{setPassword(e.target.value)}}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"                
                    type={showPassword ? "text" : "password"} />
                    <button 
                    onClick={()=>{setShowPassword(!showPassword)}} 
                    className='absolute bottom-6 right-12'>
                        {showPassword ? <EyeClosed/> : <Eye/>}
                    </button>
                    </div>

                   

                    <div className='px-20 '>
                    <button onClick={handleLogin} className="w-full py-3 mt-6 bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                    Login
                    </button>
                    </div>

                    <div className='mt-10 text-center'>
                        <p>Don't have a Account? <span onClick={()=>navigate("/signup")} className='cursor-pointer'>Sign up</span></p>
                    </div>
                </div>


        </div>


      </div>
    </div>
  )
}

export default LoginPage
