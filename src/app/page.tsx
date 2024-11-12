import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'
import Footer from '@/components/Footer';
import Offers from '@/components/Offers';
import Services from '@/components/Services';
import AppLaunch from '@/components/AppLaunch';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <AppLaunch/>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default Home