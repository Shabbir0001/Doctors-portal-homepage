import React from 'react';
import Ema from '../../../images/Ema.png';
import Herry from '../../../images/Herry.png';
import White from '../../../images/White.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import './Testimonial.css';

const patients = [
    {
        name: "Winson Herry",
        from: "California",
        img: Herry
    },
    {
        name: "Ema Watson",
        from: "Canada",
        img: Ema
    },
    {
        name: "Kelly White",
        from: "Uganda",
        img: White
    }
]


const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-head">
                <h5>TESTIMONIAL</h5>
                <h2>What Our Patients Says</h2>
            </div>
            <div className="testimonial-body">
                {
                    patients.map(patient => <TestimonialDetail patient={patient}/>)
                }
            </div>
        </div>
    );
};

export default Testimonial;