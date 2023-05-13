import React from 'react';
import AllBlogs from './AllBlogs';
import StayConnected from './StayConnected';

const BlogCategory = () => {
    return (
        <div className='container w-full'>
            <div className='grid grid-cols-12 gap-5 p-5'>
                <div className='col-span-full lg:col-span-8'>
                    <AllBlogs />
                </div>
                <div className='col-span-full lg:col-span-4' >
                    <StayConnected />
                </div>
            </div>
        </div>
    );
};

export default BlogCategory;