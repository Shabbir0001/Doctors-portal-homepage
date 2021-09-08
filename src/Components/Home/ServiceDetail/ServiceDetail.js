import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({info}) => {
    return (
        <div className="serviceDetail-container">
            <img src={info.img} alt="" />
            <h5>{info.name}</h5>
            <p>Lorem nipsum dolor suit ahdfa  skh f kkjhd ffh wiudf kjshi woysd wsdfhncak aieurhka  fdsk hsdfka</p>
        </div>
    );
};

export default ServiceDetail;