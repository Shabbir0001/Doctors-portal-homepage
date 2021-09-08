import React from 'react';
import './TestimonialDetail.css';

const TestimonialDetail = ({patient}) => {
    return (
        <div className="testimonialDetail-container">
            <p>Lorem ipsum amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane omay amar prane bajay bashi sonar bangla ami tomay valobashi ee ee ee. Oma fagune tor amer bone ghrane pagol kore ee ee ee omay ogheane tor vora khete ki dekhechi ami kichu dekhinai.</p>
            <div className="patient-card">
                <img src={patient.img} alt=""/>
                <div>
                    <h5>{patient.name}</h5>
                    <small>{patient.from}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;