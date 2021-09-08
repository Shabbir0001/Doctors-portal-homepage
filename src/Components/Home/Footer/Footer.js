import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
       <div style={{textAlign: "center"}}>
            <div className="footer-container">
            <div className="footer-card">
                <h4>Programs</h4>
                <p>Emergency Dental Care</p>
                <p>Check Up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
            </div>
            <div className="footer-card">
                <h4>Services</h4>
                <p>Fluoride Treatment</p>
                <p>Cavity Filing</p>
                <p>Teeth Whitening</p>
            </div>
            <div className="footer-card">
                <h4>Oral Health</h4>
                <p>Advanced Oral Care</p>
                <p>Regular Oral Monitor</p>
                <p>Check Up</p>
            </div>
            <div className="footer-card">
                <h4>Our Address</h4>
                <p>Park More, Rangpur, Bangladesh</p>  
                <div className="icon-container">
                      <i className="fab fa-facebook"></i>
                      <i className="fab fa-google-plus"></i>
                      <i className="fab fa-twitter"></i>
                </div>              
                 <p>Call Now</p>
                <button className="learnMore-btn">+8801908037199</button>
            </div>               
        </div>
            <p>Copyright {new Date().getFullYear()} All rights reserved.</p>
       </div>
    );
};

export default Footer;