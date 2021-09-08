import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './BusinessInfo.css';



const infosData = [
    {
        title: "Opening Hours",
        description: "We are open 24/7",
        icon: faClock,
        background: "primary"
    },
    {
        title: "Visit Our Location",
        description: "Park-More, Rangpur",
        icon: faMapMarker,
        background: "dark"
    },
    {
        title: "Call Us Now",
        description: "+8801908037199",
        icon: faPhone,
        background: "primary"
    }
]


const BusinessInfo = () => {
    return (
        <section className="businessInfo-container">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
        </section>
    );
};

export default BusinessInfo;