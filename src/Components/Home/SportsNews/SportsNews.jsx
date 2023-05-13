import React from 'react';
import { BiComment } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';

const SportsNews = () => {

    const sportsBlog = [
        {
            id: 1,
            label: 'Recent',
            title: 'Being a rock-star is a matter of fashion',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-1-270x170.jpg',
            profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/s2-70x70.jpg',
            desc: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit…',
            date: 'Oct 20, 2016',
            comment: '120'
        },
        {
            id: 2,
            label: 'Recent',
            title: 'The art of racing with speed – Motor GP',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-2-270x170.jpg',
            profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author_newser-70x70.jpg',
            desc: 'Being a food lover always Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper…',
            date: 'Oct 3, 2014',
            comment: '12'
        },
        {
            id: 3,
            label: ' Most Liked',
            title: 'Facts should know about stuffed peppers',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-270x170.jpg',
            profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/author2-70x70.jpg',
            desc: 'One of my best photos Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper…',
            date: 'Dec 23, 2015',
            comment: '31'
        },
        {
            id: 4,
            label: ' Most Liked',
            profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-270x170.jpg',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/video-img15-270x170.jpg',
            title: 'They back return to you Kennedy Darlings',
            desc: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit…',
            date: 'Oct 17, 2016',
            comment: '21'
        },
        {
            id: 5,
            label: ' Most Liked',
            profile: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-31-270x170.jpg',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-270x170.jpg',
            title: '8 Fantastic ways to improve your daily fitness',
            desc: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit…',
            date: 'Dec 17, 2019',
            comment: '32'
        }
    ]


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
        <div className='p-5'>
            <div className='my-10'>
                <div className='grid grid-cols-12 gap-x-5 '>
                    <div className='col-span-12 lg:col-span-8'>
                        <div>
                            <div>
                                <h2 className='text-black bg-yellow-800 inline-block  p-1 text-start'>Sports News</h2>
                                <hr />
                            </div>
                            <div className='mt-7'>
                                {sportsBlog.map((item) => (
                                    <div key={item.id} >
                                        <div className='flex flex-col md:flex-row justify-center mb-12 items-center '>
                                            <div className='lg:w-1/3' >
                                                <img className='w-full h-44' src={item.image} alt="" />
                                            </div>
                                            <div className='ml-5 lg:w-2/3'>
                                                <h2 className='text-black text-xl font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                                {/* <p>{item.date}</p> */}
                                                <span className='flex justify-start my-3  items-center'>
                                                    <li className='flex flex-col md:flex-row items-center text-xl text-black'> <img className='rounded-full mr-2 w-8' src={item.profile} alt="" /> <a className='text-sm text-black' href="">{item.label}</a></li>
                                                    <li className='list-none flex flex-col md:flex-row items-center mx-3 '> <SlCalender className='text-black' /> <a className='text-sm ml-3' href="">{item.date} </a></li>
                                                    <li className='list-none flex flex-col md:flex-row items-center '> <BiComment className='text-black' /> <a className='text-sm ml-3' href="">{item.comment} </a></li>
                                                </span>
                                                <p className='text-black text-sm text-left'>{item.desc}</p>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* ==============================sports news start========================= */}

                    </div>
                    <div className='col-span-12 lg:col-span-4'>
                        <div>
                            <h2 className='text-black  inline-block  p-1 text-start'> LATEST POSTS</h2>
                            <hr />
                        </div>
                        <div className='mt-7'>
                            {dataItems.map((item) => (
                                <div key={item.id} >
                                    <div className='flex justify-around items-center  mb-10'>
                                        <div className='w-1/3 mr-0'>
                                            <img className='w-32' src={item.image} alt="" />
                                        </div>
                                        <div className='ml-4'>
                                            <h2 className='text-black text-sm font-serif hover:text-red-400   text-left'>{item.title}</h2>
                                            <li className='flex justify-start items-center  mt-2 text-red-600'> <SlCalender className='mr-3' /> <a className='hover:text-red-900 text-sm text-black' href="">{item.date}</a></li>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsNews;