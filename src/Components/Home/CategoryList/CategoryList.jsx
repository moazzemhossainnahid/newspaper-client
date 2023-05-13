import React from 'react';
import { BiMessageMinus } from 'react-icons/bi';
import { GrGallery } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';

const CategoryList = () => {

    const dataItems = [
        {
            id: 1,
            label: 'Recent',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-28-130x80.jpg',
            title: 'Chinese food ingredients – What Chinese eat',
            date: 'Oct 20, 2016',
            comment: '120'
        },
        {
            id: 2,
            label: 'Trending',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-130x80.jpg',
            title: '8 Fantastic ways to improve your daily fitness',
            date: 'Nov 12, 2028',
            comment: '34'
    
        },
        {
            id: 3,
            label: ' Most Liked',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-21-130x80.jpg',
            title: 'Effective ways to get more out of basketball',
            date: 'Dec 23, 2015',
            comment: '321'
        },
        {
            id: 3,
            label: ' Most Liked',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-29-130x80.jpg',
            title: 'Healthy fish recipes for crazy-busy week nights',
            date: 'Oct 17, 2016',
            comment: '321'
        },
        {
            id: 3,
            label: ' Most Liked',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-20-130x80.jpg',
            title: 'NBA Schedule: Times, TV Listings for Oct',
            date: 'Dec 17, 2019',
            comment: '321'
        },
        {
            id: 3,
            label: ' Most Liked',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/post-276-130x80.jpg',
            title: 'Top ten and Best Beauty Looks for this year',
            date: 'Oct 19, 2016',
            comment: '321'
        },
    ]

    return (
        <div className='w-full h-full p-5'>
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

            <div className='my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {dataItems.map((item) => (
                        <div key={item.id} >
                            <div className='flex justify-around gap-5 items-center  mb-3'>
                                <div>
                                    <img className='w-full' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-black text-sm font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                    {/* <p>{item.date}</p> */}
                                    <span className='flex justify-between items-center'>
                                        <li className='flex justify-start items-center text-xl mt-2 text-black'> <SlCalender className='mr-3' /> <a className='hover:text-red-900 text-sm text-black' href="">{item.date}</a></li>
                                        {/* <li className='list-none mt-2 text-xl text-white -ml-10 hover:text-red-900'> <a href=""> <AiOutlineHeart /> </a></li> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;