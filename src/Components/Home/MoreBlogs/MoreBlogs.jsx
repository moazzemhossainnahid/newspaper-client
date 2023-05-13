import React from 'react';

const MoreBlogs = () => {
    return (
        <div className='w-full mx-auto'>
            <div className='flex justify-center items-center p-5 mx-auto my-10 w-full'>
                <div class="grid grid-cols-12 w-full mx-auto justify-center items-center gap-3">
                    <div className='col-span-12 md:col-span-3 space-y-5 justify-center w-full mx-auto'>
                        <div className='relative rounded-lg overflow-hidden w-full mx-auto'>
                            <img className='hover:scale-110 h-44 w-full transition duration-300 ease-in-out ' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 ml-10 -mt-8'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Fashion</button>
                                <h2 className='text-white text-start text-xl font-black'>Being a rock-star is a matter of fashion</h2>
                            </div>
                        </div>
                        <div className='relative rounded-lg overflow-hidden w-full mx-auto'>
                            <img className='hover:scale-110 h-44 w-full transition duration-300 ease-in-out ' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-2-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 ml-10 -mt-8'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Motor GP</button>
                                <h2 className='text-white text-start text-xl font-black'>The art of racing with speed – Motor GP</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 justify-center w-full mx-auto">
                        <div className='relative overflow-hidden rounded-lg w-full mx-auto'>
                            <img className='h-auto w-full rounded-lg hover:scale-110 transition duration-300 ease-in-out' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-550x400.jpg" alt="" />
                            <div className='absolute top-1/2 ml-10 md:ml-32 -mt-16'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Food</button>
                                <h2 className='text-white text-start text-xl font-black'>Facts should know about stuffed peppers</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-3 justify-center space-y-5 w-full mx-auto' >
                        <div className='relative overflow-hidden rounded-lg w-full mx-auto'>
                            <img className='h-44 w-full rounded-lg hover:scale-110 transition duration-300 ease-in-out' src="https://i.ibb.co/jTmdZ5j/video-img15-550x400.jpg" alt="" />
                            <div className='absolute top-1/2 ml-5 -mt-9'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Mobile</button>
                                <h2 className='text-white text-start text-xl font-black'>They back return to you Kennedy Darlings</h2>
                            </div>
                        </div>
                        <div className='relative overflow-hidden rounded-lg w-full mx-auto'>
                            <img className='h-44 w-full rounded-lg hover:scale-110 transition duration-300 ease-in-out' src="https://i.ibb.co/DLXRK8y/post-23-430x315.jpg" alt="" />
                            <div className='absolute top-1/2 ml-5 -mt-9'>
                                <button className='bg-red-500 text-white rounded px-3 flex justify-center text-2xl'>Fitness</button>
                                <h2 className='text-white text-start text-xl font-black'>8 Fantastic ways to improve your daily fitness</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreBlogs;