import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'
import Services from '@/components/Services';
import AppLaunch from '@/components/AppLaunch';
import Footer from '@/components/Footer';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <AppLaunch/>
      <Footer/>
    </div>
  )
}

export default Home