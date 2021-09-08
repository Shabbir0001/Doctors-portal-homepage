import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className={`infoCard-container info-${info.background}`}>
            <div>   
                <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div>
                <h2>{info.title}</h2>
                <small>{info.description}</small>
            </div>
        </div>
    );
};

export default InfoCard;