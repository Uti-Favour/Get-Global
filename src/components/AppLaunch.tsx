import React from 'react'
import Image from 'next/image';
import app_launch from '../../public/app_launch.png';

const AppLaunch = () => {
    return (
        <>
            <div className='text-black lg:mt-32 mt-20'>
                <h1 className='flex justify-center text-center font-bold text-4xl  mx-5 lg:text-7xl text-blue-600'>Our mobile app launch is on the way...</h1>
                <p className='flex justify-center lg:mx-64 mx-5 text-center text-gray-500 mt-4 text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis saepe rerum, dolorum rem quisquam repellat eaque quis quam quo, accusantium autem. Beatae, alias sint! Qui cupiditate numquam ea aperiam eaque ab earum.</p>
            </div>
            <div className='lg:flex justify-center mt-10'>
                <Image src={app_launch} width={1000} height={1000} alt='App lauch image' className='lg:rounded-3xl' />

            </div>
        </>
    )
}

export default AppLaunch