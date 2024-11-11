import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'
import Footer from '@/components/Footer';
import Offers from '@/components/Offers';
import Features from '@/components/Features';
import Services from '@/components/Services';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Features/>
      <Offers/>
      <Footer/>
    </div>
  )
}

export default Home