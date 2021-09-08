import React from 'react';
import Doctor from '../../../images/Doctor.png';
import DoctorCard from '../DoctorCard/DoctorCard';
import './Doctors.css';

const doctorsData =[
    {
        name: "Dr. Rana",
        img: Doctor,
        phone: "+8801908037199"
    },
    {
        name: "Dr. Shamu",
        img: Doctor,
        phone: "+8801908037199"
    },
    {
        name: "Dr. Harun",
        img: Doctor,
        phone: "+8801908037199"
    }
]

const Doctors = () => {
    return (
        <div className="doctors-container">
            <h2>OUR DOCTORS</h2>
            <div className="doctors-card">
                {
                    doctorsData.map(doctorData => <DoctorCard doctorData={doctorData}/>)
                }
            </div>
        </div>
    );
};

export default Doctors;