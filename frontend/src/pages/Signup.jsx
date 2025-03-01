import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const backend_url = "https://expense-tracker-i40u.onrender.com"


const Signup = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSignup = async (e) => {

        e.preventDefault();
        try {
          const res = await axios.post(`${backend_url}/api/auth/signup`, credentials);
          //setToken(res.data.token);
          //localStorage.setItem("token", res.data.token);
          if(res){
            navigate("/login")
          }
        } catch (error) {
          console.error("Login error:", error.response?.data?.message || error.message);
          alert("Login failed—check email/password!");
        }
      };

    return (
        <div className='flex w-screen h-screen justify-center items-center bg-gradient-to-br from-zinc-800 to-zinc-900'>
        <div className='bg-gradient-to-br from-zinc-950 to-zinc-900  p-6 rounded-xl border-2 border-zinc-700'>
          <h1 className='text-white font-bold text-2xl'>Login</h1>
          <form onSubmit={handleSignup} className='flex flex-col gap-y-4 mt-6'>
            <input
            className='p-2 bg-zinc-800 rounded-lg text-white block text-lg focus:outline-none'
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="Email"
              
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Password"
              className='p-2 bg-zinc-800 rounded-lg text-white block text-lg focus:outline-none'
            />
            <button type="submit" className='bg-zinc-100 text-zinc-900 p-2 rounded-lg font-bold text-lg'>Login</button>
          </form>
        </div>
        </div>
      );
}

export default Signup