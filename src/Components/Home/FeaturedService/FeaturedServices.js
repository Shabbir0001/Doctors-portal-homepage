import React from 'react';
import SpecialCare from '../../../images/SpecialCare.png';
import './FeaturedServices.css';

const FeaturedServices = () => {
    return (
        <div className="featuredServices-container">
            <div className="featuredImg-container">
                 <img src={SpecialCare} alt=""/>
            </div>
            <div className="featuredServices-info">
                <h2>Exceptional Dental Care, on Your Terms</h2>
                <p>Lorem ipsum dolor suift amar sonar bangla ami tomay valo bashi chirodin tomar akash tomar batash amar prane omay amar prane bajay bashi sonar bangla ami tomay valo bashi amar sonar bangla ami tomay valobashi</p>
                <button className="learnMore-btn">Learn More</button>
            </div>
        </div>
    );
};

export default FeaturedServices;