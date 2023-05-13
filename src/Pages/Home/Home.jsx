import React from 'react';
import HomeTop from '../../Components/Home/HomeTop/HomeTop';
import BlogCategory from '../../Components/Home/BlogCategory/BlogCategory';
import MoreBlogs from '../../Components/Home/MoreBlogs/MoreBlogs';
import CategoryList from '../../Components/Home/CategoryList/CategoryList';
import SportsNews from '../../Components/Home/SportsNews/SportsNews';

const Home = () => {
    return (
        <div className='container w-full'>
            <HomeTop />
            <BlogCategory />
            <MoreBlogs />
            <CategoryList />
            <SportsNews />
        </div>
    );
};

export default Home;