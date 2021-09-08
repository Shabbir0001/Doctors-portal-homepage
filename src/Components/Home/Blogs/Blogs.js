import React from 'react';
import Herry from '../../../images/Herry.png';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blogs.css';

const blogsData = [
    {
        title: "Check at least a doctor in a year for your teeth",
        author: "Dr. Rana",
        authorImg: Herry,
        date: "9th January 1998"
    },
    {
        title: "2 times of brush in a day can keep you healthy",
        author: "Dr. Shamu",
        authorImg: Herry,
        date: "9th January 1998"
    },
    {
        title: "The tooth cancer is taking a challenge",
        author: "Dr. Harun",
        authorImg: Herry,
        date: "9th January 1998"
    }
]


const Blogs = () => {
    return (
        <div className="blogs-container">
            <div className="blogs-head">
                <h5>OUR BLOGS</h5>
                <h2>From Our Blog News</h2>
            </div>
            <div className="blogs-body">
                {
                    blogsData.map(blogData => <BlogDetail blogData={blogData}/>)
                }
            </div>
        </div>
    );
};

export default Blogs;