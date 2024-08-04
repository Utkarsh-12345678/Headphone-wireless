/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://headphone-wireless.vercel.app/register",{name,email,password})
        .then(result=> {
            console.log(result)
            navigate("/login")
        })
        .catch(err=>console.log(err))
    }

  return (
    <>
    <div className="container bg-black h-[400px] text-white font-poppins">
        <form onSubmit={handleSubmit}>
            <h2 className='text-center pt-3'>Signup form</h2>
            <div className='mb-3 mt-3'>
                <label className='form-label'>Username</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  className='form-control text-black'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email Address</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control text-black'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='form-control text-black'/>
            </div>
            <div className='pt-8'>
                <button className='btn btn-success border-2' type='submit'>Register</button>
            <p>Already have an Account</p>
            <button className='btn btn-success border-2' ><a href='/login'>Login</a></button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Signup
