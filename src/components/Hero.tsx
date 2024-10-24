import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import plane from '../../public/plane_image.jpg'


const Hero = () => {
  return (
    <>
    <div className='lg:flex lg:mx-20 mx-5 mt-10'>
        <div className='mt-20'>
          <div className='space-y-10'>
          <h1 className='text-blue-700 lg:text-7xl text-4xl font-medium lg:max-w-[80%]'>Discover Your Next Great Adventure <i className="fa-solid fa-plane-departure"></i></h1>
            <p className='text-gray-500 lg:max-w-[70%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem natus quos, accusantium repellendus facere pariatur aperiam ullam id quasi vitae vel odit dicta consequatur porro molestias a magnam rerum!</p>
            <div className='text-black space-x-4 text-center lg:flex-row flex-col flex'>
                <Link href={'google.com'} className='py-3 px-10 bg-blue-700 text-white rounded-3xl'>Book Consultation <i className="fa-solid fa-arrow-right-long ml-1"></i>

                </Link>      
                <Link href={'google.com'} className='py-3 px-10 bg-[#F1F2F4] text-blue-500 rounded-3xl lg:block hidden'>View Features</Link>
            </div>
          </div>
            <div className='flex space-x-6 text-blue-700 lg:mt-28 mt-20'>
                <div>
                    <h2 className='font-medium text-4xl'>50+</h2>
                    <p className='text-blue-500 max-w-48'>Multinational Business have used Get Global</p>
                </div>
                <div>
                    <h2 className='font-medium text-4xl'>100+</h2>
                    <p className='text-blue-500 max-w-48'>Lorem ipsum dolor sit amet consectetur uno.</p>
                </div>
            </div>
        </div>

        <div className='lg:mt-0 mt-10'>
            <Image src={plane} width={950} height={500} alt='plane image' className='rounded-3xl'/>
        </div> 
    </div>
    </>
  )
}

export default Hero