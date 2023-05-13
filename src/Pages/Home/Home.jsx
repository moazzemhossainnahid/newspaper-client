import React from 'react';
import HomeTop from '../../Components/Home/HomeTop/HomeTop';
import BlogCategory from '../../Components/Home/BlogCategory/BlogCategory';
import MoreBlogs from '../../Components/Home/MoreBlogs/MoreBlogs';

const Home = () => {
    return (
        <div className='container w-full'>
            <HomeTop />
            <BlogCategory />
            <MoreBlogs />
        </div>
    );
};

export default Home;