import React from 'react';
import HomeTop from '../../Components/Home/HomeTop/HomeTop';
import BlogCategory from '../../Components/Home/BlogCategory/BlogCategory';

const Home = () => {
    return (
        <div className='container w-full'>
            <HomeTop />
            <BlogCategory />
        </div>
    );
};

export default Home;