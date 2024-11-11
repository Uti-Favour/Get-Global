import services from '@/constant/services'
import Link from 'next/link'
import React from 'react'
const Services = () => {
  return (
    <>
     <div className='text-black mt-32' id='services'>
  <h1 className='lg:mx-auto font-bold text-3xl ml-5 lg:text-5xl flex justify-center max-w-2xl lg:text-center  text-[#054378]'>
    What we offer at Get Global Traveling Agency.
  </h1>
  <p className='lg:mx-auto mx-5 text-gray-500 mt-4 lg:text-lg max-w-3xl lg:text-center'>
  Explore our range of offerings tailored to make your experience exceptional. From personalized services to top-tier products, we have something for everyone. 
  </p>
</div>
<div className='lg:grid grid-cols-3 gap-6 space-y-10 lg:space-y-0 mx-5 text-black lg:mt-20 mt-10'>
  {services.map((service) => (
   <div className='bg-[#054378] rounded-3xl'>
   <div className='p-8'>
       <div className='bg-white text-[#054378] rounded-full w-14 h-14 flex items-center justify-center'>
           <i className={service.icon}></i>
       </div>
       <h1 className='text-xl text-white font-bold mt-4'>{service.heading}</h1>
       <p className='max-w-80 text-gray-200 mt-2 mb-5'>{service.description}</p>
   </div>
</div>
  ))}
</div>

    </>
  )
}

export default Services