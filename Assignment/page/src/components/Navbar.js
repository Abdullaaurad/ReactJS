import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/Navbar.css";
import Clock from '../helpers/clock';

function Navbar() {
  const [openLinks, setOpenLinks] = React.useState(false);
  
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img className="logo" src={Logo} alt="Logo" />
        <Clock />
      </div>
      <div className="rightSide">
        <button className="menuIcon" onClick={toggleNavbar}>
          {openLinks ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`menuLinks ${openLinks ? 'open' : ''}`}>
          <Link to="/" onClick={toggleNavbar}> Home </Link>
          <Link to="/menu" onClick={toggleNavbar}> Menu </Link>
          <Link to="/about" onClick={toggleNavbar}> About </Link>
          <Link to="/contact" onClick={toggleNavbar}> Contact </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
