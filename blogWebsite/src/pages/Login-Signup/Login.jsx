import React, { useState } from 'react'
import { FaUser, FaLock, FaGoogle, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Login() {
  const [isActive, setIsActive] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = isActive ? "http://localhost:5000/auth/signup" : "http://localhost:5000/auth/login";
  
      // Send only required fields for login or signup
      const payload = isActive
        ? form  // Send all fields for signup
        : { email: form.email, password: form.password };  // Send only email & password for login
  
      const { data } = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" }
      });
  
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Auth successful!");
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };
  
  
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
  
        
        // Send user data to backend for authentication
        const backendResponse = await axios.post("http://localhost:5000/auth/google", userInfo.data);
        
        if (backendResponse.data.token) {
          localStorage.setItem("token", backendResponse.data.token);
          console.log("Google Auth successful!");
        }
      } catch (error) {
        console.error("Error during Google authentication:", error);
      }
    },
    onError: (error) => console.log("Google Login Failed:", error),
  });
  



  return (
    <div className=' min-h-[100vh] bg-linear-to-r from-[#e2e2e2] to-[#c9d6ff]'>
      <div className='flex justify-center items-center'>
        <div className={`container relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-[0_0_30px_rgba(0_0_0_0.2)] overflow-hidden
        
        `}>


          <div className={`absolute  w-[50%] h-full bg-white flex items-center text-[#333] text-center p-[40px] z-1 duration-600 ease-in-out   ${isActive ? "right-[50%] opacity-0 invisible" : "right-0 opacity-100"}`}>
            <form className='w-full' onSubmit={handleSubmit}>
              <h1 className='w-full text-[36px] font-bold my-[-10px] mx-0'>Login</h1>
              <div className='relative my-[30px] mx-0 flex justify-center'>
                <input name="email" onChange={handleChange} className='w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-[8px] border-none outline-none text-[16px] text-[#333]' type="email" placeholder='email' required />
                <FaUser className='absolute right-[20px] top-1/2 transform translate-y-[-50%] text-[#888] font-[20px] ' />
              </div>
              <div className='relative my-[30px] mx-0 flex justify-center'>
                <input name="password" onChange={handleChange} className='w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-[8px] border-none outline-none text-[16px] text-[#333]' type="password" placeholder='password' required />
                <FaLock className='absolute right-[20px] top-1/2 transform translate-y-[-50%] text-[#888] font-[20px] ' />
              </div>
              <div className='mx-0 mt-[-15px] mb-[15px] '>
                <Link className='text-[14.5px] text-[#333] decoration-0 hover:underline '>Forgot Password</Link>
              </div>
              <button className='w-full h-12 bg-[#7493ec] rounded-[8px] shadow-[0_0_10px_rgba(0_0_0_0.1)] border-none cursor-pointer text-[16px] text-white font-[600]  '>Login</button>
              <p className='text-[14.5px] my-[15px] mx-0'>or Login with social platforms</p>
              <div className='flex justify-center'>
                <Link
                  onClick={() => googleLogin()}
                  className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaGoogle /></Link>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaFacebook /></Link>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaGithub /></Link>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaLinkedin /></Link>
              </div>
            </form>
          </div>



          <div className={`absolute right-0 w-[50%] h-full flex items-center text-[#333] text-center p-[40px] z-1 duration-600 ease-in-out ${isActive ? "opacity-100 right-[50%]" : "right-0 opacity-0 invisible"}`}>
            <form className='w-full' onSubmit={handleSubmit}>
              <h1 className='w-full text-[36px] font-bold my-[-10px] mx-0'>Registration</h1>
              <div className='relative my-[30px] mx-0 flex justify-center'>
                <input name="name" onChange={handleChange} className='w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-[8px] border-none outline-none text-[16px] text-[#333]' type="text" placeholder='username' required />
                <FaUser className='absolute right-[20px] top-1/2 transform translate-y-[-50%] text-[#888] font-[20px] ' />
              </div>
              <div className='relative my-[30px] mx-0 flex justify-center'>
                <input name="email" onChange={handleChange} className='w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-[8px] border-none outline-none text-[16px] text-[#333]' type="email" placeholder='email' required />
                <IoMdMail className='absolute right-[20px] top-1/2 transform translate-y-[-50%] text-[#888] font-[20px] ' />
              </div>  
              <div className='relative my-[30px] mx-0 flex justify-center'>
                <input name="password" onChange={handleChange} className='w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-[8px] border-none outline-none text-[16px] text-[#333]' type="password" placeholder='password' required />
                <FaLock className='absolute right-[20px] top-1/2 transform translate-y-[-50%] text-[#888] font-[20px] ' />
              </div>
              <button className='w-full h-12 bg-[#7493ec] rounded-[8px] shadow-[0_0_10px_rgba(0_0_0_0.1)] border-none cursor-pointer text-[16px] text-white font-[600]'>Register</button>
              <p className='text-[14.5px] my-[15px] mx-0'>or Login with social platforms</p>
              <div className='flex justify-center'>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 ' onClick={() => googleLogin()}><FaGoogle /></Link>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaFacebook /></Link>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaGithub /></Link>
                <Link className='inline-flex p-[10px] border-solid border-[#ccc] border-[2px] rounded-[8px] text-[#333] decoration-0 my-0 mx-[8px] hover:scale-125 '><FaLinkedin /></Link>
              </div>
            </form>
          </div>


          <div className={`absolute w-full h-full
          before:absolute before:content-[] before:w-[300%] before:h-[100%] before:z-2 before:left-[-250%] before:rounded-[150px] before:bg-[#7493ec] before:ease-in-out before:duration-700
           ${isActive ? "before:left-[50%]" : ""}`}
          >


            <div className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-2  duration-600 ease-in-out ${isActive ? "left-[-50%] delay-300 " : "left-0 delay-100"}`}>
              <h1 className='w-full text-[36px] font-bold my-[-10px] mx-0 text-center '>Hello, Welcome!</h1>
              <p className='text-[14.5px] my-[15px] mx-0 mb-[20px]'>Don't have an account?</p>
              <button className='bg-green-600 w-[160px] h-[46px] rounded-[8px] cursor-pointer text-[16px] text-white font-[600]'
                onClick={() => setIsActive(true)}><Link to={`/signup`}>Register</Link></button>
            </div>


            <div className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-2  duration-600 ease-in-out ${isActive ? "right-0  delay-300" : "right-[-50%] delay-100"}`}>
              <h1 className='w-full text-[36px] font-bold my-[-10px] mx-0 text-center'>Welcome Back!</h1>
              <p className='text-[14.5px] my-[15px] mx-0 mb-[20px]'>Already have an account?</p>
              <button className='bg-green-600 w-[160px] h-[46px] rounded-[8px] cursor-pointer text-[16px] text-white font-[600]'
                onClick={() => setIsActive(false)}><Link to={`/login`}>Login</Link></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
