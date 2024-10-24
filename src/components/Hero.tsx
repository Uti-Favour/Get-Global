import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import plane from '../../public/plane_image.jpg'

const Hero = () => {
  return (
    <>
    <div className='lg:flex lg:mx-20 mx-5 items-center mt-5'>
        <div className='space-y-10'>
            <h1 className='text-black lg:text-7xl text-4xl'>Discover Your Next Great Adventure</h1>
            <p className='text-gray-500 lg:max-w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem natus quos, accusantium repellendus facere pariatur aperiam ullam id quasi vitae vel odit dicta consequatur porro molestias a magnam rerum!</p>
            <div className='text-black space-x-4 text-center lg:flex-row flex-col flex'>
                <Link href={'google.com'} className='py-3 px-10 bg-[#0C0D0E] text-white rounded-3xl'>Book Consultation</Link>
                <Link href={'google.com'} className='py-3 px-10 bg-[#F1F2F4] text-black rounded-3xl lg:block hidden'>View Features</Link>
            </div>
        </div>

        <div className='lg:mt-0 mt-10'>
            <Image src={plane} width={1000} height={400} alt='plane image' className='rounded-3xl'/>
        </div> 
    </div>
    </>
  )
}

export default Hero