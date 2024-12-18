import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero_image from '../../public/Hero Image.jpg'


const Hero = () => {
  return (
    <>
    <div className='lg:flex lg:mx-20 mx-5 mt-10'>
        <div className='mt-20'>
          <div className='space-y-10'>
          <h1 className='text-[#054378] lg:text-left lg:text-7xl text-4xl font-black'>Dream. Explore. Discover. Repeat.</h1>
            <p className='text-gray-500 lg:text-left lg:max-w-[70%]'> We craft personalized journeys, taking care of every detail so you can enjoy a seamless adventure. From exotic getaways to cultural explorations, we make your travel dreams a reality. </p>
            <div className='text-black space-x-4 text-center lg:flex-row flex-col flex'>
                <a href={'https://wa.me/message/XP53SSNGNKAJA1'} className='py-3 px-10 bg-[#054378] text-white rounded-3xl'>Book Consultation <i className="fa-solid fa-arrow-right-long ml-1"></i>

                </a>      
                <Link href={'google.com'} className='py-3 px-10 bg-[#F1F2F4] text-[#054378] rounded-3xl lg:block hidden'>View Features</Link>
            </div>
          </div>
            <div className='lg:block hidden'>
            <div className='flex space-x-6 text-[#054378] lg:mt-28 mt-20'>
                <div>
                    <h2 className='font-semibold text-4xl'>50+</h2>
                    <p className='text-[#004882] max-w-48'>Multinational Business have used Get Global</p>
                </div>
                <div>
                    <h2 className='font-semibold text-4xl'>100+</h2>
                    <p className='text-[#004882] max-w-48'>Lorem ipsum dolor sit amet consectetur uno.</p>
                </div>
            </div>
            </div>
        </div>

        <div className='lg:mt-0 mt-10'>
            <Image src={hero_image} width={950} height={500} alt='plane image' className='rounded-3xl max-h-[95vh]'/>
        </div> 
    </div>
    </>
  )
}

export default Hero