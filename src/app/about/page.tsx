import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import about_img from '../../../public/mission.jpg'

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className='flex mx-20'>
      <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto suscipit cum est doloremque dolore tenetur dolorem, eaque pariatur molestiae fugit harum ratione iure, error autem nemo. Quam porro, deserunt nobis expedita velit veritatis asperiores dignissimos eaque facilis enim fugit aliquid earum doloribus unde error natus distinctio! Beatae, obcaecati facilis.</h1>
      <div>
        <Image src={about_img} width={50} height={50} alt='About Image'/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About