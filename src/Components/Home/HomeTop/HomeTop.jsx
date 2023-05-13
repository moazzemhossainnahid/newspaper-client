import React from 'react';

const HomeTop = () => {
    return (
        <div className='w-full z-0 container'>
            <div className='flex flex-col md:flex-row justify-center gap-3 items-center my-6'>
                <div className='w-full md:w-3/5 mx-auto h-full'>
                    <div className='relative overflow-hidden lg:h-48'>
                        <img className='hover:scale-110 transition w-full object-cover duration-300 ease-in-out ' src="https://i.ibb.co/tL5ymLy/post-1-550x200.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2'>
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/FFFFFF/external-photo-appliances-flatart-icons-outline-flatarticons.png" />
                            <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                            <h2 className='text-white text-xl font-black -ml-44'>Beign a Rock-Star is a matter of fashion</h2>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start gap-3 items-center mt-3'>
                        <div className='relative overflow-hidden w-full h-40'>
                            <img className='hover:scale-110 transition duration-300 ease-in-out w-full' src="https://i.ibb.co/gZs3Jrb/post-31-550x400.jpg" alt="" />
                            <div className='absolute top-1/2 left-1/2'>
                                <img className='' src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/FFFFFF/external-photo-appliances-flatart-icons-outline-flatarticons.png" />
                                <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                                <h2 className='text-white text-sm font-black -ml-32'>Beign a Rock-Star is a matter of fashion</h2>
                            </div>
                        </div>
                        <div className='relative overflow-hidden w-full h-40'>
                            <img className='hover:scale-110 transition duration-300 ease-in-out w-full' src="https://i.ibb.co/ggCjFck/post-2-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 left-1/2'>
                                <img className='' src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/FFFFFF/external-photo-appliances-flatart-icons-outline-flatarticons.png" />
                                <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                                <h2 className='text-white text-sm font-black -ml-32'>Beign a Rock-Star is a matter of fashion</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/5 mx-auto h-60 lg:h-full">
                    <div className='relative overflow-hidden h-60 lg:h-full'>
                        <img className='hover:scale-110 transition duration-300 ease-in-out' src="https://i.ibb.co/jTmdZ5j/video-img15-550x400.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2'>
                            <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/30/FFFFFF/external-video-recorder-blogger-and-influencer-xnimrodx-lineal-xnimrodx.png" />
                            <button className='bg-red-700 rounded text-white px-2 -ml-5 text-sm'>Fashion</button>
                            <h2 className='text-white text-xl font-black -ml-44'>Beign a Rock-Star is a matter of fashion</h2>
                            <div className='flex justify-start -ml-24 mt-2 pb-3 items-center'>
                                <div className='flex items-center'>
                                    <img src="https://img.icons8.com/windows/32/FFFFFF/person-male.png" />
                                    <h2 className='text-white text-sm'>Masum Rana</h2>
                                </div>
                                <div className='flex items-center ml-5'>
                                    <img src="https://img.icons8.com/material-outlined/24/FFFFFF/calendar--v1.png" />
                                    <h2 className='text-white text-sm'>1/12/2023</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;