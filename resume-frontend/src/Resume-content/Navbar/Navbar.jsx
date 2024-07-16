import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <header>
      <nav className="nav-container">
        <div className='nav-heading'>
          <h1>Resume-Crafter</h1>
        </div>
        <div className='Navbar-links'>
          <ul className={`main-links ${mobileView ? 'hidden' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li>Templates</li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
          <div className='nav-Menu' onClick={() => setMobileView(!mobileView)}>
            <MenuIcon style={{ fontSize: "2rem", color: 'white' }} />
          </div>
        </div>
      </nav>
      {mobileView && (
        <div className='mobile-view-icon'>
          <ul className="mobile-links">
            <li><Link to="/">Home</Link></li>
            <li>Templates</li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
