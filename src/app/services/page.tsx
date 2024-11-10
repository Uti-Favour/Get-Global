import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import service_image from '../../../public/plane_image.jpg'

const services = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-between lg:mx-36 mx-5'>
        <div className=' text-black mt-16 space-y-6'>
          {/* <span className='text-[#054378] font-bold'>Future of Travel</span> */}
          <h1 className='text-3xl text-[#054378] font-semibold max-w-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p className='max-w-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi aliquid asperiores, magni nobis modi consequatur ex veniam corporis qui mollitia neque fugiat commodi ullam, dignissimos alias molestias ab atque.</p>
          <div className='space-x-4'>
          <button className='py-2 px-5 rounded-3xl bg-[#054378] text-white'>See our offers</button>
          <button className='py-2 px-5 rounded-3xl border border-[#054378] text-gray-600'>Learn More</button>
        </div>
        </div>
        <div>
          <Image src={service_image} width={500} height={200} alt='Image' className=' object-cover rounded-3xl max-h-96' />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default services 