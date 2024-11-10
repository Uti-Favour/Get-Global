import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import about_img from '../../../public/plane_image.jpg'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='lg:flex justify-between lg:mx-20 mx-5 mt-20 items-center'>
        <div className='space-y-10'>
          <h1 className='text-[#054378] lg:text-left lg:text-7xl text-4xl font-black'>About Get Global</h1>
          <p className='text-gray-500 max-w-3xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto suscipit cum est doloremque dolore tenetur dolorem, eaque pariatur molestiae fugit harum ratione iure, error autem nemo. Quam porro, deserunt nobis expedita velit veritatis asperiores dignissimos eaque facilis enim fugit aliquid earum doloribus unde error natus distinctio! Beatae, obcaecati facilis.</p>
          <p className='text-gray-500  max-w-3xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto suscipit cum est doloremque dolore tenetur dolorem, eaque pariatur molestiae fugit harum ratione iure, error autem nemo. Quam porro, deserunt nobis expedita velit veritatis asperiores dignissimos eaque facilis enim fugit aliquid earum doloribus unde error natus distinctio! Beatae, obcaecati facilis.</p>
          <p className='text-gray-500  max-w-3xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto suscipit cum est doloremque dolore tenetur dolorem, eaque pariatur molestiae fugit harum ratione iure, error autem nemo. Quam porro, deserunt nobis expedita velit veritatis asperiores dignissimos eaque facilis enim fugit aliquid earum doloribus unde error natus distinctio! Beatae, obcaecati facilis.</p>
          <p className='text-gray-500  max-w-3xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto suscipit cum est doloremque dolore tenetur dolorem, eaque pariatur molestiae fugit harum ratione iure, error autem nemo. Quam porro, deserunt nobis expedita velit veritatis asperiores dignissimos eaque facilis enim fugit aliquid earum doloribus unde error natus distinctio! Beatae, obcaecati facilis.</p>
        </div>
        <div>
          <Image src={about_img} width={500} height={500} alt='About Image' className='rounded-3xl lg:mt-0 mt-10' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About