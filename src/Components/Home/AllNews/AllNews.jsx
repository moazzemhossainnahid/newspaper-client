import React from 'react';
import { GrGallery } from 'react-icons/gr';

const AllNews = () => {

    const tags = [
        {
            id: 1,
            tag: 'Basketball '
        },
        {
            id: 2,
            tag: ' Fashion '
        },
        {
            id: 3,
            tag: ' Fitness'
        },
        {
            id: 4,
            tag: ' Food '
        },
        {
            id: 5,
            tag: '  Football'
        },
        {
            id: 6,
            tag: '  Food'
        },
        {
            id: 7,
            tag: '   Gadgets '
        },
        {
            id: 8,
            tag: '   Lifestyle '
        },
        {
            id: 9,
            tag: '   Mobile  '
        },
        {
            id: 10,
            tag: 'Moto GP'
        },
        {
            id: 11,
            tag: 'Security '
        },
        {
            id: 12,
            tag: 'Photography'
        },
        {
            id: 13,
            tag: 'Sports '
        },
        {
            id: 14,
            tag: ' Technology '
        },
    ]

    const allnews = [
        {
            id: 1,
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-430x315.jpg',
            title: 'Being a rock-star is a matter of',
            name: 'motoGp',
            date: 'Oct 20, 2016'
        },
        {
            id: 2,
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-2-430x315.jpg',
            title: 'The art of racing with speed – Motor GP',
            name: 'motos Gp',
            date: 'Nov 12, 2028'
        },
        {
            id: 3,
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-430x315.jpg',
            title: '8 Fantastic ways to improve your daily fitness',
            name: 'Mobile',
            date: 'Dec 23, 2015'
        },
        {
            id: 4,
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/video-img15-430x315.jpg',
            title: 'Improve and monitor fingerprint technology',
            name: 'Busketball',
            date: 'Feb 11, 2019'
        },
        {
            id: 5,
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-430x315.jpg',
            title: 'tic ways to improve your daily fitness',
            name: 'DipoBall',
            date: 'Nov 31, 2018'
        },
        {
            id: 6,
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-7-430x315.jpg',
            title: 'Home team takes the win – NBA 2016',
            name: 'Hot News',
            date: 'Nov 31, 2018'
        },
    ]


    return (
        <div className='p-5'>
            <div className='grid grid-cols-12 gap-x-5 '>
                <div className='col-span-12 md:col-span-8'>
                    {/* ==============================sports news start========================= */}
                    <div>
                        <div>
                            <h2 className='text-white bg-yellow-800 inline-block  p-1 text-start'>All News</h2>
                            <hr />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-5 '>
                        {allnews.map((item) => (
                            <div className='w-full mx-auto flex justify-center' key={item.id} >
                                <div className='relative mt-7'>
                                    <img src={item.image} alt="" />
                                    <div className='absolute gap-x-52 mt-5 top-0 flex justify-between'>
                                        <h2 className='text-white ml-3 bg-red-700 p-1'>{item.name} </h2>
                                        <GrGallery className='text-3xl text-white bg-white' />
                                    </div>
                                    <div className='absolute bottom-0 '>
                                        <h2 className='text-white text-left ml-3 mb-2 text-xl'>{item.title}</h2>
                                        {/* <ul className='flex gap-x-10 ml-2 mb-1 items-center '>
                                                <li className='flex justify-start items-center'> <img className='w-8 rounded-full mr-3' src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg" alt="" /> <a className='text-white text-xl' href="">Rachel</a></li>
                                                <li className='flex justify-start items-center'> <SlCalender className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">Oct 20, 2016</a></li>
                                                <li className='flex justify-start items-center'> <BiMessageMinus className='mr-3 text-xl text-white' /> <a className='text-white text-xl' href="">0</a></li>
                                            </ul> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                    {/* ==============================tag news start========================= */}
                    <div>
                        <div>
                            <h2 className='text-black  inline-block  p-1 text-start'> TAGS</h2>
                            <hr />
                        </div>
                        <div className='grid grid-cols-4 gap-2 mt-7'>
                            {tags.map((item) => (
                                <div key={item.id} >
                                    <li className='list-none bg-red-600 text-white p-2'><a href="">{item.tag}</a></li>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ==============================tag news end========================= */}
                </div>
            </div>
        </div>
    );
};

export default AllNews;