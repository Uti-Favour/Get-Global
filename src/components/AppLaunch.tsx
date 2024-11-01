'use client'
import React from 'react'
import Image from 'next/image';
import app_launch from '../../public/app_launch.png';

const AppLaunch = () => {
    return (
        <>
            <div className='bg-blue-700 lg:p-5 p-3 mt-20'>
                <div className='text-black mt-10'>
                    <h1 className='flex justify-center text-center font-bold text-4xl lg:text-7xl text-white'>Our mobile app launch is on the way...</h1>
                    <p className='flex justify-center lg:mx-64  text-center text-gray-200 mt-4 text-sm lg:text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis saepe rerum, dolorum rem quisquam repellat eaque quis quam quo, accusantium autem. Beatae, alias sint! Qui cupiditate numquam ea aperiam eaque ab earum.</p>
                </div>
                <div  className='lg:flex justify-center mt-16'>
                    <Image src={app_launch} width={1500} height={1000} alt='App lauch image' className='lg:rounded-3xl' />
                </div>
            </div>
        </>
    )
}

export default AppLaunch