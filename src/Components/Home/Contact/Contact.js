import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-head">
                <h4>CONTACT US</h4>
                <h2>Always Connect With Us</h2>
            </div>
            <div className="contact-form">
                <ContactForm/>
            </div>
        </div>
    );
};


export default Contact;