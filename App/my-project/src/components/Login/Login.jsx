import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=React.useState()
    const [password,setPassword]=React.useState()
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://headphone-wireless.vercel.app/login",{email,password})
        .then(result=> {
            console.log(result)
            if(result.data==="success"){
                alert("login successful")
                navigate("/")
            }else{
                alert("wrong password or email")
                navigate("/login")
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    <div className="container h-[400px] bg-black text-white font-poppins">
        <form onSubmit={handleSubmit}>
            <h2 className='text-center pt-3'>Login form</h2>
            
            <div className='mb-3'>
                <label className='form-label'>Email Address</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control text-black'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='form-control text-black'/>
            </div>
            <div className='mt-8 pt-8'>
                <button className='btn btn-success border-2' type='submit'>Login</button>
            <p>Dont have an Account</p>
            <button className=' border-2'><a href='/register'>Signup</a></button>

            </div>
        </form>
    </div>
    </>
  )
}

export default Login
