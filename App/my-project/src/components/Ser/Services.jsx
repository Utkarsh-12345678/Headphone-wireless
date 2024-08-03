// /* eslint-disable no-unused-vars */
// import React from 'react'
// import Icon1 from "../../assets/icons/obj1.png"
// import Icon2 from "../../assets/icons/obj2.png"
// import Icon3 from "../../assets/icons/obj3.png"
// import Icon4 from "../../assets/icons/obj4.png"
// const ServicesData=[
//     {
//         id:1 ,
//         title: "Security",
//         icon: Icon1,
//         desc: "Lorem Ipsum Done",
//         delay: 0.5,
//     },
//     {
//         id:2 ,
//         title: "Security",
//         icon: Icon2,
//         desc: "Lorem Ipsum Done",
//         delay: 0.8,
//     },
//     {
//         id:3,
//         title: "Security",
//         icon: Icon3,
//         desc: "Lorem Ipsum Done",
//         delay: 1,
//     },
    
// ]
// const Services = () => {
//     const [activeData,seActiveData]=React.useState(ServicesData[0]);
//   return (
//     <>
//     <section className='bg-gray font-poppins py-10'>
//         <div className='container flex flex-col justify-center items-center align-center border-2  border-gray-600 shadow-3xl py-5'>
//             <div>
//                 <h1 className='text-3xl font-bold text-center'>Services</h1>
//             </div>
//             <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//                 {
//                     ServicesData.map((item)=>{
//                         return(
//                             <div key={item.id} className='flex flex-col justify-center items-center border-2 border-black'>
//                                 <div>
//                                     <img src={item.icon} className='w-[100px]'/>
//                                 </div>
//                                 <div>
//                                     <p>{item.title}</p>
//                                 </div>
//                                 <div>
//                                     <p>{item.desc}</p>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Services

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

import Icon1 from "../../assets/icons/obj1.png"
import Icon2 from "../../assets/icons/obj2.png"
import Icon3 from "../../assets/icons/obj3.png"
import Icon4 from "../../assets/icons/obj4.png"
import { delay } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const ServicesData=[
    {
        id:1 ,
        title: "Security",
        icon: Icon1,
        desc: "Lorem Ipsum Done",
        delay: 0.5,
    },
    {
        id:2 ,
        title: "Security",
        icon: Icon2,
        desc: "Lorem Ipsum Done",
        delay: 0.8,
    },
    {
        id:3,
        title: "Security",
        icon: Icon3,
        desc: "Lorem Ipsum Done",
        delay: 1,
    },
    
]

const Services = () => {
    return(
        <>
        <section className='bg-gray-100 font-poppins py-8'>
        <div className="container py-14 shadow-2xl">
                <h1 className='text-3xl text-center font-bold pb-10'>Services</h1>
     
            <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6'>
                {ServicesData.map((data)=>(
                    <UpdateFollower mouseOptions={
                        {
                            backgroundColor: "white",
                            zIndex: 999,
                            followSpeed:1.5,
                            scale:5,
                            rotate: 720,
                            mixBlendMode: "darker",
                            backgroundElement:(
                                <div>
                                    <img src={data.icon}/>
                                </div>
                            )

                        }
                    }>
                        <div className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-primary text-white' key={data.id}>
                            <img src={data.icon} className='w-[100px] mb-4'/>
                        
                            <div className='text-center space-y-2'>
                                <h1 className='text-3xl font-bold'>{data.title}</h1>
                                <p className='text-center text-sm text-white/75'>{data.desc}</p>
                            </div>
                        </div>
                    </UpdateFollower>
                ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default Services
