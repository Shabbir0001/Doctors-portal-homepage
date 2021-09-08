import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar-container">
                <p>
                   <Link className="Link" to="/">Home</Link>
                </p>

                <p>
                    <Link className="Link"  to="/about">About</Link>
                </p>
                <p>
                    <Link className="Link"  to="/services">Services</Link>    
                </p>
                <p>
                    <Link className="Link"  to="/reviews">Reviews</Link>    
                </p>
                <p>
                    <Link className="Link"  to="/blog">Blog</Link>
                </p>
                <p>
                    <Link className="Link" to="/aboutUs">About Us</Link>
                </p>
            </nav>
        </div>
    );
};

export default Navbar;