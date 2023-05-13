import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { FaArrowRight, FaCalendar, FaComment, FaPhotoVideo } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';

const Technology = () => {

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
    return (
        <div className=''>
            <div className='my-10'>
                <h2 className='border-b py-1  text-black'><span className='bg-blue-600  p-1 text-sm'>Technology</span></h2>
                <div>
                    {HeadBlogs?.map((b) => (
                        <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                            <div className='relative '>
                                <img src={b.image} alt="" />
                                <span className='absolute top-1/2 left-1/2 rounded-full border '>
                                    <FaPhotoVideo className=' text-black  text-3xl ' />
                                </span>
                            </div>
                            <div>
                                <h2 className='text-black text-xl'>{b.title}</h2>
                                <div className='flex justify-start gap-9 items-center'>
                                    <div className='flex justify-start items-center'>
                                        <BsPerson className='text-xl' />
                                        <h1 className='text-black hover:text-black ml-1'>{b.name}</h1>
                                    </div>
                                    <div className='flex justify-start items-center my-3'>
                                        <SlCalender />
                                        <h1 className='text-black hover:text-black ml-2'>{b.date}</h1>
                                    </div>
                                </div>
                                <p className='text-black text-left'>{b.description}</p>
                                <div className='flex justify-start gap-10 items-center'>
                                    <div className='flex justify-start items-center'>
                                        <FaComment />
                                        <h1 className='text-black hover:text-black ml-2'>{b.comment}Comment</h1>
                                    </div>
                                    <div className='flex justify-start items-center my-3'>
                                        <GrView className='text-black' />
                                        <h1 className='text-black hover:text-black ml-2'>{b.view}</h1>
                                    </div>
                                    <li className='flex justify-start items-center my-3 hover:bg-black hover:text-white'>
                                        <a href="" className='text-black hover:text-white mr-2' >Read More</a>
                                        <FaArrowRight />
                                    </li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {blogs.map((item) => (
                    <div key={item.id} >
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
    );
};

export default Technology;