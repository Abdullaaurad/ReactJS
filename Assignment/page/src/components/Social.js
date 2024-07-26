import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import "../styles/Social.css";

function Social() {
    const handleIconClick = (url) => {
        window.location.href = url;
    };

    return (
    <div className="socialMedia">
        <div className="content">
            <FaInstagram className="FooterIcons" onClick={()=>handleIconClick('https://www.instagram.com/alecbuilding/')}/> 
            <FaTwitter className="FooterIcons" onClick={()=>handleIconClick('https://twitter.com/ALECBuilding?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')}/> 
            <FaFacebook className="FooterIcons" onClick={()=>handleIconClick('https://www.facebook.com/ALECbuilding')}/> 
            <FaLinkedin className="FooterIcons" onClick={()=>handleIconClick('https://www.linkedin.com/company/alecbuilding')}/>
        </div>
    </div>
    );
}

export default Social;