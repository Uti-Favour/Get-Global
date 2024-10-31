import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from '@/components/Hero'
import Services from '@/components/Services';
import AppLaunch from '@/components/AppLaunch';


const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <AppLaunch/>
    </div>
  )
}

export default Home