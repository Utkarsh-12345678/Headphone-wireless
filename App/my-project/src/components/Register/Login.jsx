/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=React.useState()
    const [password,setPassword]=React.useState()
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3006/login",{email,password})
        .then(result=> {
            console.log(result)
            if(result.data==="success"){
                navigate("/register")
            }else{
                alert("wrong password or email")
                navigate("/login")
            }
        })
        .catch(err=>console.log(err))
    }

  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h2 className='text-center pt-3'>Login form</h2>
            
            <div className='mb-3'>
                <label className='form-label'>Email Address</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='form-control'/>
            </div>
            <button className='btn btn-success' type='submit'>Login</button>
            <p>Dont have an Account</p>
            <button ><a href='/register'>Signup</a></button>
        </form>
    </div>
    </>
  )
}

export default Login
