import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorCard.css';


const DoctorCard = ({doctorData}) => {
    return (
        <div className="doctorCard-container">
            <img src={doctorData.img} alt=""/>
            <h5>{doctorData.name}</h5>
            <p><FontAwesomeIcon icon={faPhoneAlt} style={{color: "skyblue"}}/>{doctorData.phone}</p>
        </div>
    );
};

export default DoctorCard;