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
        <div className='text-black mt-16 space-y-8'>
          <h1 className='lg:text-5xl text-4xl text-[#054378] font-semibold max-w-xl'>Explore the World with Absolute Ease</h1>
          <p className='max-w-xl text-gray-500'>
            At Get Global, we turn your travel dreams into reality. From tailored travel packages to seamless booking services, we’re here to make your journey stress-free and unforgettable. Let us take you wherever your heart desires.
          </p>
          <div className='lg:space-x-4'>
            <button className='py-3 px-8 rounded-3xl bg-[#054378] text-white'>See Our Offers</button>
            <button className='py-3 px-5 underline rounded-3xl border-[#054378] text-gray-600'>Learn More</button>
          </div>
          <div className='lg:hidden block lg:mt-0 mt-10'>
            <Image src={service_image_2} width={550} height={200} alt='Image' />
          </div>
        </div>
      </div>

      <div className='lg:flex justify-between lg:mx-36 mx-5 items-center'>
        <div className='text-black mt-16 space-y-8'>
          <h1 className='lg:text-5xl text-4xl text-[#054378] font-semibold max-w-xl'>Tailored Travel Experiences</h1>
          <p className='max-w-xl text-gray-500'>
            Whether you’re planning a relaxing getaway, an adventurous escape, or a business trip, Get Global crafts customized experiences to fit your needs. Your satisfaction is our priority.
          </p>
          <div className='lg:space-x-4'>
            <button className='py-3 px-8 rounded-3xl bg-[#054378] text-white'>See Our Offers</button>
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
        <div className='text-black mt-16 space-y-8'>
          <h1 className='lg:text-5xl text-4xl text-[#054378] font-semibold max-w-xl'>Seamless Travel Booking</h1>
          <p className='max-w-xl text-gray-500'>
            Say goodbye to travel hassles! Our intuitive platform ensures a smooth booking experience, from flights and accommodations to local activities. Start your journey with confidence and convenience.
          </p>
          <div className='lg:space-x-4'>
            <button className='py-3 px-8 rounded-3xl bg-[#054378] text-white'>See Our Offers</button>
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
