/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Navbar/Navbar'

import Headphone1 from "../../assets/headphone.png"
import Headphone2 from "../../assets/headphone2.png"
import Headphone3 from "../../assets/headphone3.png"
const headphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: "Headphones Wireless",
        subtitle: "This is Best Head Phone in Wireless Category",
        price: "1000Rs",
        model: "Brown",
        bgColor: "#8b5958"
    },
    {
        id: 2,
        image: Headphone2,
        title: "Headphones Wireless2",
        subtitle: "This is Best Head Phone in Wireless Category",
        price: "1000Rs",
        model: "Line Green",
        bgColor: "#8b5958"
    },
    {
        id: 3,
        image: Headphone3,
        title: "Headphones Wireless3",
        subtitle: "This is Best Head Phone in Wireless Category",
        price: "1000Rs",
        model: "Ocean Blue",
        bgColor: "#8b5958"
    },
]
const Categories = () => {
  return (
    <>
    <Navbar/>
    <section className='bg-black text-white font-poppins'>
        <div className='container flex flex-row items-center justify-center '>
            <div className='h-[500px]'>
                
                <ul className='flex flex-row items-center justify-center gap-4 mt-20'>
                    {
                        headphoneData.map((item)=>{
                            return(
                                <div key={item.id} className='flex flex-col justify-center items-center text-center border-2 p-5  '>
                                    <div className='pb-3'>
                                        <img src={item.image} className='w-[100px]'/>
                                    </div>
                                    <div className='pb-3'>
                                        <p>{item.title}</p>
                                    </div>
                                    <div >
                                        <p>{item.subtitle}</p>
                                    </div>
                                    <div>
                                        <p>{item.price}</p>
                                    </div>
                                   <div>
                                        <p>{item.model}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
                </div>
            
        </div>
    </section>
    </>
  )
}

export default Categories
