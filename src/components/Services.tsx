import services from '@/constant/services'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <>
     <div className='text-black mt-32'>
  <h1 className='flex justify-center text-center font-bold text-4xl mx-5 lg:text-7xl text-blue-600'>
    Have a look at what we have to offer
  </h1>
  <p className='flex justify-center lg:mx-64 mx-5 text-center text-gray-500 mt-4'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis saepe rerum, dolorum rem quisquam repellat eaque quis quam quo, accusantium autem. Beatae, alias sint! Qui cupiditate numquam ea aperiam eaque ab earum.
  </p>
</div>
<div className='lg:grid grid-cols-3 gap-6 space-y-10 lg:space-y-0 mx-5 text-black lg:mt-20 mt-10'>
  {services.map((service) => (
    <div key={service.heading} className='lg:mx-20 text-center'>
      <div className='bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto'>
        <i className={service.icon}></i>
      </div>
      <h1 className='text-xl text-gray-700 font-bold mt-4'>{service.heading}</h1>
      <p className='max-w-80 text-gray-500 mt-2 mb-5'>{service.description}</p>
      <Link href={'google.com'} className='underline text-sm text-blue-600'>
        Learn More
      </Link>
    </div>
  ))}
</div>

    </>
  )
}

export default Services