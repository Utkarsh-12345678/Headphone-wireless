/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import {motion} from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower';

import '../style.css'

 const NavbarMenu=[
     {
         id:1,
         title: "Home",
         Link: "/home"
     },
     {
         id:2,
         title: "Categories",
         Link: "/categories"
     },
     {
         id:3,
         title: "About",
         Link: "/about"
     },
     {
         id:4,
         title: "Login/Signup",
         Link: "/register"
     },
    //  {
    //      id:5,
    //      title: "Contact",
    //      Link: "#"
    //  },
    ]
const Navbar = () => {

    const [active,Setactive]=useState(false);

    const handleactive=()=>{
        Setactive(!active);
    }
  return (
    <>
    <div className="bg-black text-white font-poppins">
    <motion.nav 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1 , delay: 0.5}}
    className='container flex  justify-between items-center'>
          <div>
            <a href='#' className="text-2xl font-bold uppercase">HeadPhones<span className="text-xl font-light">Wireless</span></a>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-4  px-2 py-4'>
                {
                NavbarMenu.map((item)=>{
                    return(
                        <li key={item.id} >
                            <UpdateFollower mouseOptions={{
                                 backgroundColor: "white",
                                 zIndex: 999,
                                 followSpeed: 1.5,
                                 scale: 5,
                                 mixBlendMode:"difference"
                            }}>
                                <a href={item.Link} className='inline-block text-sm  py-2 uppercase'>{item.title}</a>
                            </UpdateFollower>
                        </li>
                    )
                })
            }
                <UpdateFollower mouseOptions={{
                                 backgroundColor:"white",
                                 zIndex:999,
                                 followSpeed:1.5,
                                 scale:5,
                                 mixBlendMode:"difference"
     
                        }}>
 <button className="text-xl "><SlEarphones/></button>
                        </UpdateFollower>
            </ul>
          </div>
          <div className='md:hidden' onClick={handleactive}>
            <MdMenu className='text-4xl'/>
          </div>
        

      </motion.nav>
      </div>




   <div className={`bg-black text-white   ${active ? "display" : "none-display "}  `}>
    {/* <div className={`my-element ${active ? "active" : ""}`} onClick={handleClick}>
      Click me!
    </div> */}

    
            <ul className='flex flex-col items-center menu-ul gap-4  px-2 py-4'>
                {
                NavbarMenu.map((item)=>{
                    return(
                        <li key={item.id} className='menu' >
                            <UpdateFollower mouseOptions={{
                                 backgroundColor: "white",
                                 zIndex: 999,
                                 followSpeed: 1.5,
                                 scale: 5,
                                 mixBlendMode:"difference"
                            }}>
                                <a href={item.Link} className='inline-block text-sm  py-2 uppercase'>{item.title}</a>
                            </UpdateFollower>
                        </li>
                    )
                })
            }
            </ul>
        </div>



     
    </>
  )
}

export default Navbar
