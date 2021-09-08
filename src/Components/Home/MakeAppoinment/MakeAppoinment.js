import React from 'react';
import Doctor from '../../../images/Doctor.png';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <div className="makeAppoinment-container">
            <div className="doctorImg">
                <img src={Doctor} alt=""/>
            </div>

            <div className="appoinment-info">
                <h5>APPOINMENT</h5>
                <h2>Make An Appoinment Today</h2>
                <p>Lorem ipsum dolor amar sonar bangla ami tomay valo bashi chirodin tomar akash tomar batash amar prane bajay bashi</p>
                <button className="learnMore-btn">Learn More</button>
            </div>
            
        </div>
    );
};

export default MakeAppoinment;