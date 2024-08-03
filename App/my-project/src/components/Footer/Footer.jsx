/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
// import { FaMapLocation } from 'react-icons/fa'
import { FaMapLocationDot } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp"
const Footer = () => {
  return (
    <>
    <footer className='bg-primary pt-12 pb-8 text-white '>
        <div className='container '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase pb-2'>HeadPhones</h1>
                    <p className='text-sm max-w-[300px] pb-2'>Lorem Ipsu There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... The customer is very important, the customer will be followed by the customer. At home, whoever is bowing, the urn flatters the quiver.  important to be aware of the importance of the players, but the airline needs a lot of attention. </p>
                    <div>
                    <p className='flex items-center gap-2'><FaPhone/> +91 9313530370</p>
                    <p className='flex items-center gap-2 mt-2'>
                        {" "}
                        <FaMapLocationDot/>
                        Silvassa , DNH</p>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <ul className='space-y-2'>
                            <li><a href='/home'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/'>Contact Us</a></li>
                            <li><a href='/categories'>Categories</a></li>
                            <li><a href='/'>Policy</a></li>
                        </ul>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                            <li><a href='/home'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/'>Contact Us</a></li>
                            <li><a href='/categories'>Categories</a></li>
                            <li><a href='/'>Policy</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-2'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xl'>Payment Methods</p>
                        <img src={Cards} className='w-[200px]'/>
                    </div>
                </div>
            </div>
            <p className='text-white text-center mt-8 border-t-2 pt-8'>
                &#169;  2024. All Rights Reserved || Headphones-Wireless
            </p>
        </div>
    </footer>
    </>
  )
}

export default Footer
