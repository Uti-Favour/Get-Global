import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const contact = () => {
    return (
        <>
            <Navbar />
            <div className='text-black mt-10 px-5' id='services'>
                <h1 className='font-bold text-3xl lg:text-6xl flex justify-center text-center max-w-4xl mx-auto text-[#054378]'>
                    What We Offer at Get Global Traveling Agency
                </h1>
                <div className='mt-10 mx-auto flex justify-center'>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeV3VxGsG6iTVv8ODWtnfYno9errG42WIHIFMULU9nTd37ydw/viewform?embedded=true"
                        className='w-full lg:w-[640px] h-[800px] lg:h-[1332px] border-0'
                        title='Get Global Contact Form'
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default contact
