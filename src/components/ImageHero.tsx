import React from 'react'
import Image from 'next/image'
import hero_image from '../../public/window.png'

const ImageHero = () => {
    return (
        <>
            <div className='flex justify-between lg:mx-40 mx-5 items-center text-black'>
                <div className='space-y-8'>
                    <h1 className='text-5xl font-semibold leading-tight max-w-md'>Unleash Your Wanderlust & Explore the World</h1>
                    <p className='text-lg text-gray-500 max-w-sm'>Get ready to embark on unforgettable journeys to breathtaking destinations. </p>
                    <button className='py-3 px-5 rounded-md bg-black text-white'>Discover Now</button>
                </div>
                <div>
                    <Image src={hero_image} width={600} height={600} alt='Hero Image' />
                </div>
            </div>
        </>
    )
}

export default ImageHero