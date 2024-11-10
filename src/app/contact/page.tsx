import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const contact = () => {
    return (
        <>
            <Navbar />
            <div className='text-black mt-10' id='services'>
                <h1 className='lg:mx-auto font-bold text-3xl ml-5 lg:text-6xl flex justify-center max-w-4xl lg:text-center  text-[#054378]'>
                    What we offer at Get Global Traveling Agency.
                </h1>
                {/* <p className='lg:mx-auto mx-5 text-gray-500 mt-4 lg:text-lg max-w-3xl lg:text-center'>
                    Explore our range of offerings tailored to make your experience exceptional. From personalized services to top-tier products, we have something for everyone.
                </p> */}


            </div>
            <Footer />
        </>
    )
}

export default contact