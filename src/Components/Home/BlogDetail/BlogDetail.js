import React from 'react';
import './BlogDetail.css';

const BlogDetail = ({blogData}) => {
    return (
        <div className="blogDetail-container">
            <div className="doctor-card">
                <img src={blogData.authorImg} alt=""/>
                <div>
                    <h5>{blogData.author}</h5>
                    <small>{blogData.date}</small>
                </div>
              </div>  
              <h4>{blogData.title}</h4>
              <p>Lorem ipsum amar sonar bangla ami tomay valobashi.Chirodin tomar akash tomar batash amar prane bajay bashi</p>
        </div>
    );
}; 


export default BlogDetail;