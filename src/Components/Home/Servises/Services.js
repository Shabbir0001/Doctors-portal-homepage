import React from 'react';
import Cavity from '../../../images/Cavity.png';
import Fluoride from '../../../images/Fluoride.png';
import Whitening from '../../../images/Whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const servicesInfo = [
    {
        name: "Fluoride Treatment",
        img: Fluoride
    },
    {
        name: "Cavity Filling",
        img: Cavity
    },
    {
        name: "Teeth Whitening",
        img: Whitening
    }
]

const Services = () => {
    return (
            <section className="services-container">
                <div className="services-head">
                    <h5>OUR SERVICES</h5>
                    <h2>Services We Provide</h2>
                </div>
                <div className="services-body">
                    {
                        servicesInfo.map(info => <ServiceDetail info={info}/>)
                    }
                </div>
            </section>
        );
};

export default Services;