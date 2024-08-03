/* eslint-disable no-unused-vars */
import React from 'react'
import Headphone1 from '../../assets/headphone.png'
import Headphone2 from '../../assets/headphone2.png'
import Headphone3 from '../../assets/headphone3.png'
import {FaWhatsapp} from 'react-icons/fa'
import {UpdateFollower} from "react-mouse-follower"
import Navbar from '../Navbar/Navbar'
import Services from '../Ser/Services'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'

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

const Hero = () => {
    const [activeData, setActiveData] = React.useState(headphoneData[0]);

    const handleActiveData=(Data)=>{
        setActiveData(Data);
    }
    return (
        <>
        <Navbar/>
            <section className='bg-brandDark text-white font-poppins'>
                <div className='container grid grid-cols-1 md:grid-cols-2  min-h-[500px]'>
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                        <div className='space-y-5 text-center md:text-left'>
                            <UpdateFollower mouseOptions={{
                            backgroundColor:"white",
                            zIndex:999,
                            followSpeed:4.5,
                            scale:5,
                            mixBlendMode:"difference"

                        }}>
                            <h1 className='text-3xl lg:text-6xl font-bold font-poppins'>{activeData.title}</h1>
                         </UpdateFollower>   
                            <p className='text-sm leading-loose text-white/80'>{activeData.subtitle}</p>
                            <button style={{
                                backgroundColor: activeData.bgColor
                            }} className=' px-4 py-2 inline-block font-normal rounded-sm' >Buy Now | Purchase</button>

                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <p className='uppercase text-sm'>Headphones for you</p>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>

                            <div className='grid grid-cols-3 gap-10'>
                                {headphoneData.map((item) => {
                                    return (
                                        <div key={item.id} 
                            onClick={()=>handleActiveData(item)}
                                        className='grid grid-cols-2 place-items-center cursor-pointer'>
                                            <div>
                                                <img src={item.image} className='w-[200px]' />
                                            </div>
                                            <div className='space-y-2'>
                                                <p className='text-base font-bold'>{item.price}</p>
                                                <p className='text-xs font-normal text-nowrap'>{item.model}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col justify-end items-center'>
                        <img src={activeData.image} className='w-[300px] md:w-[400px] xl:w-[550px]' />
                    </div>
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference'>
                        <a>
                            <FaWhatsapp/>
                        </a>
                    </div>
                </div>
            </section>


             <Services/>
             <Banner/>
             <Footer/>
        </>
    )
}

export default Hero
