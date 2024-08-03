/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import HeadPhone4 from "../../assets/headphone4.png"
import { easeInOut, motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
const Banner = () => {
  return (
    <>
    <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
            
            <div >
                <motion.img 
                initial={{opacity:0,x:-100,rotate:-180}}
                animate={{opacity:1,x:0,rotate:0,duration:1.8}}
                transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
                
                src={HeadPhone4} className='w-[200px] mx-auto md:w-[400px] lg:w-[500px]'/>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px] hover:text-black'>
                    <UpdateFollower mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed:1.5,
                            scale:5,
                            mixBlendMode: "difference",
                    }}>
                    <h1 className=' text-3xl lg:text-5xl font-semibold font-poppins rounded-md hover:bg-[#e33343] hover:text-white'>The Latest Headphones With the Latest Technology</h1>
                    
                    </UpdateFollower>
                    <p className='text-xl font-light '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itkk to make a type specimen book. </p>
                    <UpdateFollower
                    mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed:1.5,
                            scale:5,
                            rotate: 720,
                            mixBlendMode: "difference",
                    }}
                    >
                        <button className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white'>Shop Now</button>
                    </UpdateFollower>
                    
                </div>
            </div>
           
        </div>
    </section>
    </>
  )
}

export default Banner
