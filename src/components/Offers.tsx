import React from 'react'

const Offers = () => {
    return (
        <>
            <div className='bg-[#edefeb] py-8 '>
                {/* <div className='mt-20 grid grid-cols-3 mx-20 space-x-10'>
                    <div className='p-10 col-span-2 rounded-3xl'></div>
                    <div className='p-10 bg-pink-200 rounded-3xl'></div>
                </div> */}
                <div className='mt-5 grid lg:grid-cols-3 lg:mx-24 mx-4 lg:space-x-5 text-black lg:space-y-0 space-y-10'>
                    <div className='p-8 bg-[url("https://wise.com/static-assets/app/_next/static/media/nilan.b465695b.jpg")] bg-cover bg-no-repeat col-span-2 rounded-3xl text-white'>
                        <h1 className='lg:text-4xl text-3xl font-semibold lg:mt-52 mt-20'>Register for <br />
                            Wise Connect ’24</h1>
                        <p className='mt-5 lg:text-lg max-w-md'>Our flagship cross-border payments conference takes place in London, San Francisco and Singapore. <br /> <span className='underline lg:font-semibold font-medium'>Register for your place</span></p>
                    </div>
                    <div className='lg:pb-10 px-10 lg:py-60 pt-36 pb-10 bg-[#ffffff] rounded-3xl space-y-6'>
                        <h1 className='lg:text-4xl text-2xl font-semibold'>Stay up to date with everything Platform</h1>
                        <p className='lg:text-lg'>Find out how we partnered
                            with Bank Mandiri to power fast,
                            affordable payments for customers
                            in Indonesia. <span className='underline font-medium '>Learn More.</span></p>
                    </div>
                </div>
                <div className='mt-5 grid lg:grid-cols-3 lg:mx-20 mx-4 lg:space-x-5 text-black lg:space-y-0 space-y-10'>
                <div className='p-8 bg-[url("https://wise.com/static-assets/app/_next/static/media/sibos.b51f69cb.jpg")] bg-cover bg-no-repeat lg:col-span-2 rounded-3xl text-white lg:hidden block'>
                        <h1 className='lg:text-4xl text-3xl font-semibold lg:mt-52 mt-20'>Seamlessly connect with us at SIBOS ’24</h1>
                        <p className='mt-5 lg:text-lg max-w-md'>Our flagship cross-border payments conference takes place in London, San Francisco and Singapore. <br /> <span className='underline lg:font-semibold font-medium'>Register for your place</span></p>
                    </div>
                    <div className='lg:pb-10 px-10 lg:py-60 pt-36 pb-10 bg-[#ffffff] rounded-3xl space-y-6'>
                        <h1 className='lg:text-4xl text-2xl font-semibold'>Stay up to date with everything Platform</h1>
                        <p className='mt-5 lg:text-lg text-md max-w-md'>Find out how we partnered
                            with Bank Mandiri to power fast,
                            affordable payments for customers
                            in Indonesia. <span className='underline font-medium'>Learn More.</span></p>
                    </div>
                    <div className='p-8 bg-[url("https://wise.com/static-assets/app/_next/static/media/sibos.b51f69cb.jpg")] bg-cover bg-no-repeat lg:col-span-2 rounded-3xl text-white lg:block hidden'>
                        <h1 className='lg:text-4xl text-3xl font-semibold lg:mt-52 mt-20'>Seamlessly connect <br />
                            with us at SIBOS ’24</h1>
                        <p className='mt-5 lg:text-lg max-w-md'>Our flagship cross-border payments conference takes place in London, San Francisco and Singapore. <br /> <span className='underline lg:font-semibold font-medium'>Register for your place</span></p>
                    </div>

                </div> 
            </div>
        </>
    )
}

export default Offers