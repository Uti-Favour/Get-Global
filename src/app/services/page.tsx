import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import service_image from '../../../public/service_1.jpg'
import service_image_2 from '../../../public/service_2.jpg'
import service_image_3 from '../../../public/plane_image.jpg'



const services = () => {
  return (
    <>
      <Navbar />
      <div className='lg:flex justify-between lg:mx-36 mx-5 items-center lg:mt-10 mt-5'>
      <div className='lg:block hidden'>
          <Image src={service_image_2} width={550} height={200} alt='Image' className='max-h-[700px] object-cover' />
        </div>
        <div className=' text-black mt-16 space-y-8'>
          
          {/* <span className='text-[#054378] font-bold'>Future of Travel</span> */}
          <h1 className='lg:text-5xl text-4xl text-[#054378] font-semibold max-w-xl'>Title for service section</h1>
          <p className='max-w-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi aliquid asperiores, magni nobis modi consequatur ex veniam corporis qui mollitia neque fugiat commodi ullam, dignissimos alias molestias ab atque.</p>
          <div className='lg:space-x-4'>
          <button className='py-3 px-8 rounded-3xl bg-[#054378] text-white'>See our offers</button>
          <button className='py-3 px-5 underline rounded-3xl border-[#054378] text-gray-600'>Learn More</button>
        </div>
        <div className='lg:hidden block lg:mt-0 mt-10'>
          <Image src={service_image_2} width={550} height={200} alt='Image' />
        </div>
        </div>
       
      </div>
      <div className='lg:flex justify-between lg:mx-36 mx-5 items-center'>
        <div className=' text-black mt-16 space-y-8'>
          {/* <span className='text-[#054378] font-bold'>Future of Travel</span> */}
          <h1 className='lg:text-5xl text-4xl text-[#054378] font-semibold max-w-xl'>Title for service section</h1>
          <p className='max-w-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi aliquid asperiores, magni nobis modi consequatur ex veniam corporis qui mollitia neque fugiat commodi ullam, dignissimos alias molestias ab atque.</p>
          <div className='lg:space-x-4'>
          <button className='py-3 px-8 rounded-3xl bg-[#054378] text-white'>See our offers</button>
          <button className='py-3 px-5 underline rounded-3xl border-[#054378] text-gray-600'>Learn More</button>
        </div>
        </div>
        <div className='lg:mt-0 mt-10'>
          <Image src={service_image} width={550} height={200} alt='Image' className='max-h-[700px]' />
        </div>
      </div>
      <div className='lg:flex justify-between lg:mx-36 mx-5 items-center lg:mt-10 mt-5'>
      <div className='lg:block hidden'>
          <Image src={service_image_3} width={550} height={200} alt='Image' className='max-h-[700px] object-cover' />
        </div>
        <div className=' text-black mt-16 space-y-8'>
          
          {/* <span className='text-[#054378] font-bold'>Future of Travel</span> */}
          <h1 className='lg:text-5xl text-4xl text-[#054378] font-semibold max-w-xl'>Title for service section</h1>
          <p className='max-w-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi aliquid asperiores, magni nobis modi consequatur ex veniam corporis qui mollitia neque fugiat commodi ullam, dignissimos alias molestias ab atque.</p>
          <div className='lg:space-x-4'>
          <button className='py-3 px-8 rounded-3xl bg-[#054378] text-white'>See our offers</button>
          <button className='py-3 px-5 underline rounded-3xl border-[#054378] text-gray-600'>Learn More</button>
        </div>
        <div className='lg:hidden block lg:mt-0 mt-10'>
          <Image src={service_image_3} width={550} height={200} alt='Image' />
        </div>
        </div>
       
      </div>
      <Footer />
    </>
  )
}

export default services 