import React from 'react';
import { BiMessageMinus } from 'react-icons/bi';
import { GrGallery } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';

const CategoryList = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col lg:flex-row justify-around gap-10 items-center'>
                <div>
                    <div>
                        <h2 className='text-white bg-yellow-800 inline-block p-1 text-start'>Food & Packinges</h2>
                        <hr />
                    </div>
                    <div className='relative mt-7'>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-430x315.jpg" alt="" />
                        <div className='absolute gap-x-52 mt-5 top-0 flex justify-between'>
                            <h2 className='text-white ml-3 bg-red-700 p-1'>Fashion </h2>
                            <GrGallery className='text-3xl text-white bg-white' />
                        </div>
                        <div className='absolute bottom-0 '>
                            <h2 className='text-white text-left ml-3 mb-2 text-md'>Facts should know about stuffed peppers</h2>
                            <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg" alt="" /> <a className='text-white text-xl' href="">Rachel</a></li>
                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">Oct 20, 2016</a></li>
                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">0</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-white bg-green-800 inline-block p-1 text-start'>Photography</h2>
                        <hr />
                    </div>
                    <div className='relative mt-7'>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-430x315.jpg" alt="" />
                        <div className='absolute gap-x-52 mt-5 top-0 flex justify-between'>
                            <h2 className='text-white ml-3 bg-red-700 p-1'>Fashion </h2>
                            <GrGallery className='text-3xl ml-5 text-white bg-white' />
                        </div>
                        <div className='absolute bottom-0 '>
                            <h2 className='text-white text-left ml-3 mb-2 text-md'>Being a rock-star is a matter of fashion</h2>
                            <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg" alt="" /> <a className='text-black text-xl' href="">Rachel</a></li>
                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-red-700' /> <a className='text-black text-xl' href="">Oct 20, 2016</a></li>
                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-red-700' /> <a className='text-black text-xl' href="">0</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-white bg-red-800 inline-block p-1 text-start'>NBA - Basketball</h2>
                        <hr />
                    </div>
                    <div className='relative mt-7'>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-7-430x315.jpg" alt="" />
                        <div className='absolute gap-x-52 mt-5 top-0 flex justify-between'>
                            <h2 className='text-white ml-4 bg-red-700 p-1'>Basketball </h2>
                            <GrGallery className='text-3xl ml-5 text-white bg-white' />
                        </div>
                        <div className='absolute bottom-0 '>
                            <h2 className='text-white text-left ml-3 mb-2 text-md'>Home team takes the win – NBA 2016</h2>
                            <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/s2-70x70.jpg" alt="" /> <a className='text-white text-xl' href="">Rachel</a></li>
                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-white bg-red-600' /> <a className='text-white text-xl' href="">Oct 20, 2016</a></li>
                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">0</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;