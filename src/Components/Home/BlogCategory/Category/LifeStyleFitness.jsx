import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineDriveFileMoveRtl } from 'react-icons/md';

const LifeStyleFitness = () => {

    const fitnessBlog = [
        {
            id: 1,
            title: 'Being a rock-star is a matter of fashion',
            name: 'Rechel',
            image: 'https://i.ibb.co/S6wkJgC/post-1-430x315.jpg',
            descriptions: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt…'
        },
        {
            id: 1,
            title: 'Being a rock-star is a matter of fashion',
            name: 'Rechel',
            image: 'https://i.ibb.co/ggCjFck/post-2-430x315.jpg',
            descriptions: 'Being a food lover always Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas…'
        },
    ]

    const fitnessblogs = [
        {
            id: 1,
            image: 'https://i.ibb.co/MVT20G1/post-2-130x80.jpg',
            title: 'Facts should know about stuffed peppers',
            name: 'Food'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/gJj4p85/video-img15-130x80.jpg',
            title: '8 Fantastic ways to improve your daily fitness',
            name: 'Fitness'

        },
        {
            id: 3,
            image: 'https://i.ibb.co/khMk0Cv/post-23-130x80.jpg',
            title: 'They back return to you Kennedy Darlings',
            name: 'Mobile'
        },
        {
            id: 4,
            image: 'https://i.ibb.co/HNdH1q2/post-7-130x80.jpg',
            title: 'Home team takes the win – NBA 2016',
            name: 'Basketball'
        },
    ]


    return (
        <div className=''>
            <div className='flex justify-center mt-10'>
                <img src="https://i.ibb.co/26T1Tyb/ad-2.jpg" alt="" />
            </div>
            <div className='mt-10'>
                <h2 className='border-b py-1 mb-3 text-white'><span className='bg-yellow-600  p-1 text-sm'>Lifestyle & Fitness</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {fitnessBlog.map((item) => (
                        <div key={item.id} >
                            <div >
                                <h2 className='text-black text-xl mb-3  text-left'>{item.title}</h2>
                                <div className='relative  '>
                                    <img className='w-full mb-5 ' src={item.image} alt="" />
                                    <div className='absolute  bottom-0 py-3 flex items-center justify-center rounded'>
                                        <div className='flex items-center'>
                                            <span>
                                                <li className='flex items-center text-2xl text-red-900'>
                                                    <BsPerson />
                                                    <a className='text-white text-sm ml-1' href="">Rachel</a></li>
                                            </span>

                                            <span className='ml-7'>  <li className='flex items-center text-2xl text-red-900'>
                                                <MdOutlineDriveFileMoveRtl />
                                                <a className='text-white text-sm ml-1' href="">Moto Gp</a></li></span>
                                        </div>
                                        <div className='ml-36'>
                                            <a href="">
                                                <AiOutlineHeart className='text-3xl text-white' />
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <h2 className='text-white text-xl  text-left'>{item.title}</h2> */}
                                    <p>{item.descriptions}</p>
                                    {/* <li className='flex justify-start items-center mt-2'> <FaCalendar className='mr-3' /> <a href="">{item.date}</a></li> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 my-10'>
                        {fitnessblogs.map((item) => (
                            <div key={item.id} >
                                <div className='flex justify-around gap-5 items-center w-full mb-3'>
                                    <div className='w-1/4'>
                                        <img className='w-full object-cover' src={item.image} alt="" />
                                    </div>
                                    <div className='w-3/4'>
                                        <h2 className='text-black text-md font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                        {/* <p>{item.date}</p> */}
                                        <span className='flex justify-between items-center'>
                                            <li className='flex justify-start items-center text-2xl mt-2 text-red-900'> <MdOutlineDriveFileMoveRtl className='mr-3' /> <a className='hover:text-red-900 text-sm text-white' href="">{item.name}</a></li>
                                            <li className='list-none mt-2 text-xl text-black -ml-10 hover:text-red-900'> <a href=""> <AiOutlineHeart /> </a></li>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center my-10'>
                        <img src="https://i.ibb.co/WWt0mbC/adv.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeStyleFitness;