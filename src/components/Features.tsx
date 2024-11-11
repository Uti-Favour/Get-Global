import React from 'react';

const Features = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3 gap-10 lg:mx-20 mx-5 mt-20'>
                <div className='bg-blue-500 rounded-3xl p-10 lg:col-span-2'>
                    <h1 className='lg:text-5xl text-3xl max-w-2xl text-white'>Explore the World with Tailored Travel Experiences</h1>
                    <p className='mt-5 text-gray-200'>Discover unforgettable destinations, curated just for you. From adventure-packed journeys to relaxing getaways, we offer custom travel experiences that make every moment memorable.</p>
                </div>
                
                <div className='bg-blue-600 rounded-3xl'>
                    <div className='p-8'>
                        <div className='bg-white text-blue-600 rounded-full w-14 h-14 flex items-center justify-center'>
                            <i className='fas fa-map-marked-alt'></i>
                        </div>
                        <h1 className='text-xl text-white font-bold mt-4'>Personalized Itineraries</h1>
                        <p className='max-w-80 text-gray-200 mt-2 mb-5'>Every traveler is unique, and so are our itineraries. Experience trips designed around your preferences and passions.</p>
                    </div>
                </div>
                
                <div className='bg-teal-500 rounded-3xl'>
                    <div className='p-8'>
                        <div className='bg-white text-teal-500 rounded-full w-14 h-14 flex items-center justify-center'>
                            <i className='fas fa-plane'></i>
                        </div>
                        <h1 className='text-xl text-white font-bold mt-4'>Seamless Travel Planning</h1>
                        <p className='max-w-80 text-gray-200 mt-2 mb-5'>From flights to accommodations, we handle all the details, ensuring a smooth and stress-free journey.</p>
                    </div>
                </div>
                
                <div className='bg-green-500 rounded-3xl'>
                    <div className='p-8'>
                        <div className='bg-white text-green-500 rounded-full w-14 h-14 flex items-center justify-center'>
                            <i className='fas fa-star'></i>
                        </div>
                        <h1 className='text-xl text-white font-bold mt-4'>Exclusive Experiences</h1>
                        <p className='max-w-80 text-gray-200 mt-2 mb-5'>Access exclusive tours, dining experiences, and activities that offer an authentic taste of your destination.</p>
                    </div>
                </div>
                
                <div className='bg-purple-500 rounded-3xl'>
                    <div className='p-8'>
                        <div className='bg-white text-purple-500 rounded-full w-14 h-14 flex items-center justify-center'>
                            <i className='fas fa-headset'></i>
                        </div>
                        <h1 className='text-xl text-white font-bold mt-4'>24/7 Support</h1>
                        <p className='max-w-80 text-gray-200 mt-2 mb-5'>Our team is available around the clock to assist with any questions, ensuring a worry-free travel experience.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
