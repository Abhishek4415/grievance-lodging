import React from 'react';
import { Link } from 'react-router-dom';
 // Import the CSS file for styling
import logo from './logo.png';
const Navigation = () => {
    return (
       
            
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="" /> {/* Replace with an actual logo */}
                </div>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Login</Link>
                    <Link to="/" className="navbar-link">Signup</Link>
                </div>
            </nav>
      

  
    );
};

export default Navigation;