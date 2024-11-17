import React from 'react'

const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const Offers = () => {
    return (
        <>
            <div className='bg-[#f5f7fa] py-8'>
                <div className='mt-5 grid lg:grid-cols-3 lg:mx-24 mx-4 lg:space-x-5 text-black lg:space-y-0 space-y-10'>
                    <div className='p-8 relative overflow-hidden col-span-2 rounded-3xl text-white bg-gradient-to-r from-blue-600 to-indigo-700'>
                        <BackgroundPattern />
                        <div className='absolute top-0 right-0 w-1/2 h-full opacity-30'>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path fill="currentColor" d="M160,20 L160,50 L180,35 L160,20 M20,35 L180,35 M30,28 L30,42 M60,28 L60,42 M90,28 L90,42 M120,28 L120,42 M150,28 L150,42" 
                                      stroke="currentColor" strokeWidth="4"/>
                                <circle cx="40" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="4"/>
                                <circle cx="160" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="4"/>
                            </svg>
                        </div>
                        <h1 className='lg:text-4xl text-3xl font-semibold lg:mt-52 mt-20 relative z-10'>Join Our Exclusive <br />
                            Summer Travel Expo</h1>
                        <p className='mt-5 lg:text-lg max-w-md relative z-10'>Experience our premier travel showcase featuring amazing destinations in Europe, Asia, and beyond. Early bird discounts available. <br /> <span className='underline lg:font-semibold font-medium'>Reserve Your Spot</span></p>
                    </div>
                    <div className='lg:pb-10 px-10 lg:py-60 pt-36 pb-10 bg-white rounded-3xl space-y-6 shadow-sm'>
                        <h1 className='lg:text-4xl text-2xl font-semibold'>Subscribe to Flight Deals</h1>
                        <p className='lg:text-lg'>Get exclusive access to our best flight offers and vacation packages delivered straight to your inbox. <span className='underline font-medium'>Sign up now.</span></p>
                    </div>
                </div>
                <div className='mt-5 grid lg:grid-cols-3 lg:mx-20 mx-4 lg:space-x-5 text-black lg:space-y-0 space-y-10'>
                    <div className='p-8 relative overflow-hidden lg:col-span-2 rounded-3xl text-white bg-gradient-to-r from-purple-600 to-pink-600 lg:hidden block'>
                        <BackgroundPattern />
                        <div className='absolute top-0 right-0 w-1/2 h-full opacity-30'>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M40,100 L160,100 M40,100 L70,80 M40,100 L70,120" stroke="currentColor" strokeWidth="4" fill="none"/>
                                <circle cx="40" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="4"/>
                                <path d="M140,80 L160,100 L140,120" stroke="currentColor" strokeWidth="4" fill="none"/>
                            </svg>
                        </div>
                        <h1 className='lg:text-4xl text-3xl font-semibold lg:mt-52 mt-20 relative z-10'>Business Class Special</h1>
                        <p className='mt-5 lg:text-lg max-w-md relative z-10'>Upgrade your travel experience with our exclusive business class offers to premium destinations worldwide. <br /> <span className='underline lg:font-semibold font-medium'>View Offers</span></p>
                    </div>
                    <div className='lg:pb-10 px-10 lg:py-60 pt-36 pb-10 bg-white rounded-3xl space-y-6 shadow-sm'>
                        <h1 className='lg:text-4xl text-2xl font-semibold'>Last Minute Getaways</h1>
                        <p className='mt-5 lg:text-lg text-md max-w-md'>Spontaneous traveler? Check out our hand-picked last-minute flight deals to exciting destinations. <span className='underline font-medium'>Explore Deals</span></p>
                    </div>
                    <div className='p-8 relative overflow-hidden lg:col-span-2 rounded-3xl text-white bg-gradient-to-r from-purple-600 to-pink-600 lg:block hidden'>
                        <BackgroundPattern />
                        <div className='absolute top-0 right-0 w-1/2 h-full opacity-30'>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M40,100 L160,100 M40,100 L70,80 M40,100 L70,120" stroke="currentColor" strokeWidth="4" fill="none"/>
                                <circle cx="40" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="4"/>
                                <path d="M140,80 L160,100 L140,120" stroke="currentColor" strokeWidth="4" fill="none"/>
                            </svg>
                        </div>
                        <h1 className='lg:text-4xl text-3xl font-semibold lg:mt-52 mt-20 relative z-10'>Business Class <br />
                            Special</h1>
                        <p className='mt-5 lg:text-lg max-w-md relative z-10'>Upgrade your travel experience with our exclusive business class offers to premium destinations worldwide. <br /> <span className='underline lg:font-semibold font-medium'>View Offers</span></p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Offers