import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contactForm-container">
            <input type="text" name="email" placeholder="Email Address" id="email"/>
            <br/>
            <input type="text" name="subject" placeholder="Subject" id="subject"/>
            <br/>
            <input type="text" name="message" placeholder="Message" id="message"/>
            <br/>
            <button className="submit-button">SUBMIT</button>
        </div>
    );
};

export default ContactForm;