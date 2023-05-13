import React from 'react';
import { FaFacebookMessenger, FaCalendar, FaPhotoVideo, FaPersonBooth, FaArrowRight, FaComment, FaCloudversify, } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDriveFileMoveRtl } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import Technology from './Category/Technology';
import LifeStyleFitness from './Category/LifeStyleFitness';
const blogs = [
    {
        id: 1,
        image: 'https://i.ibb.co/MVT20G1/post-2-130x80.jpg',
        title: 'The art of racing with speed-Motoe Gp',
        date: 'Oct 20, 2016'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/gJj4p85/video-img15-130x80.jpg',
        title: 'They back return to you Kennedy Darlings',
        date: 'Nov 12, 2028'
    },
    {
        id: 3,
        image: 'https://i.ibb.co/khMk0Cv/post-23-130x80.jpg',
        title: '8 Fantastic ways to improve your daily fitness',
        date: 'Dec 23, 2015'
    },
    {
        id: 4,
        image: 'https://i.ibb.co/Cmh4628/travel-post-98-130x80.jpg',
        title: 'Improve and monitor fingerprint technology',
        date: 'Feb 11, 2019'
    },
]

const HeadBlogs = [
    {
        id: 1,
        title: 'Being a rock-star is a matter of fashion',
        name: 'Rechel',
        image: 'https://i.ibb.co/S6wkJgC/post-1-430x315.jpg',
        profile: 'https://i.ibb.co/19cKn7h/author-newser-70x70.jpg',
        message: '32',
        description: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt…',
        date: 'Oct 20, 2016',
        view: '9728'
    },
]


const AllBlogs = () => {
    return (
        <article className='container w-full'>
            <div className='flex justify-between items-center border-b'>
                <div>
                    <ul className='flex justify-start items-center'>
                        <li className=' hover:text-black'><a href="">All</a></li>
                        <li className='ml-4 hover:text-black'><a href="">Football</a></li>
                        <li className='ml-4 hover:text-black'><a href="">Gadgets</a></li>
                        <li className='ml-4 hover:text-black'><a href="">Lifestyle</a></li>
                    </ul>
                </div>
                <li className='flex justify-start items-center hover:text-black'><a href="">More</a>
                    <MdKeyboardArrowDown className=' text-2xl mt-1' />
                </li>
            </div>

            <div className='flex flex-col md:flex-row justify-between gap-7 items-center '>

                <div className='mt-3 md:w-1/2 mx-auto'>
                    {HeadBlogs.map((a) => (
                        <div key={a.id}>
                            <div className='relative '>
                                <img src={a.image} alt="" />
                                <span className='absolute top-0 right-0 rounded-full border p-2 mt-10 mr-10 '>
                                    <FaPhotoVideo className=' text-black  text-3xl ' />
                                </span>
                            </div>
                            <h2 className='text-black text-xl font-black my-4 text-left'>{a.title}</h2>
                            <ul className='flex justify-between items-center pr-6'>
                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src={a.profile} alt="" /> <a href="">{a.name}</a></li>
                                <li className='flex justify-start items-center'> <FaCalendar className='mr-3' /> <a href="">{a.date}</a></li>
                                <li className='flex justify-start items-center'> <FaFacebookMessenger className='mr-3' /> <a href="">{a.message}</a></li>
                            </ul>
                            <p className='text-black text-left mt-4'>{a.description}</p>
                        </div>
                    ))}
                </div>

                <div className='md:w-1/2 mx-auto'>
                    {blogs.map((item) => (
                        <div key={item.id}>
                            <div className='flex justify-around gap-5 items-center  mb-3'>
                                <div className='relative '>
                                    <img className='w-full' src={item.image} alt="" />
                                    <span className='absolute top-5 left-10 rounded-full border p-1 '>
                                        <FaPhotoVideo className=' text-black  text-2xl ' />
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-black text-md  text-left'>{item.title}</h2>
                                    {/* <p>{item.date}</p> */}
                                    <li className='flex justify-start items-center mt-2'> <FaCalendar className='mr-3' /> <a href="">{item.date}</a></li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="">
                <Technology />
            </div>

            <div className="">
                <LifeStyleFitness />
            </div>


        </article>
    );
};

export default AllBlogs;