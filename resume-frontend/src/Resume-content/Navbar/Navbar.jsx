import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MatcherContext } from '../../Login';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const [mobileView, setMobileView] = useState(false);
  const { match } = useContext(MatcherContext); 
  const { setMatch } = useContext(MatcherContext);
  const logout=()=>{
    setMatch(false);
  setMobileView(!mobileView)
    navigate('/')
  }
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
            {match?<li onClick={logout}>Logout</li>:<div className='login-signup'><li><Link to="/Login">Login</Link></li>
              <li><Link to="/SignUp">SignUp</Link></li></div>}
          </ul>
          <div className='nav-Menu' onClick={() => setMobileView(!mobileView)}>
            <MenuIcon style={{ fontSize: "2rem", color: 'white' }} />
          </div>
        </div>
      </nav>
      {mobileView && (
        <div className='mobile-view-icon'>
          <ul className="mobile-links">
            <li onClick={()=>{setMobileView(!mobileView)}}><Link to="/" >Home</Link></li>
            <li  onClick={()=>{setMobileView(!mobileView)}}>Templates</li>
            {match?<li onClick={logout}>Logout</li>:<div className='login-signup'id='login-signup'><li  onClick={()=>{setMobileView(!mobileView)}}><Link to="/Login">Login</Link></li>
              <li  onClick={()=>{setMobileView(!mobileView)}}><Link to="/SignUp" >SignUp</Link></li></div>}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
