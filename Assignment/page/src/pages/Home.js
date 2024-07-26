import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "../styles/Home.css";
import BannerImage from '../assets/Background.jpg';
import altair from '../assets/altair.jpg';
import park from '../assets/waterpark.jpg';
import bridge from '../assets/bridge.jpg';
import stadium from '../assets/stadium.jpg';
import tunnel from '../assets/tunnel.jpg';
import hotel from '../assets/Hotel.jpg';
import plan from '../assets/plan.jpg';
import BSI from '../assets/BSI.png';
import Video from '../helpers/VideoPlayer';
import Appose from '../assets/Aplose.jpg';
import Block from '../assets/block.png';
import Cyber from '../assets/cyber.jpg';
import Modern from '../assets/modern.jpg';
import Community from '../assets/community.jpg';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #002855;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px; /* Adjusted margin */
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Example of scaling on hover */
  }
`;

const View = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled.img`
  max-width: 50%;
  height: auto;
  display: block;
  margin: auto;

  &:hover {
    transform: scale(1.2);
  }
`;

function Home() {
  return (
    <div className={`home-container`}>
      <Video />
      <div className="headerContainer">
        <h1 className="We">We provide everything your project needs, under one roof.</h1>
        <br />
        <p className="Our_Solution">Our solution portfolio has evolved and expanded to deliver unparalleled value to our esteemed clients. With our comprehensive range of services, we proudly offer a complete turnkey solution that covers every aspect of your project.</p>
        <p>From construction to MEP (Mechanical, Electrical and Plumbing), fit-out to energy solutions, data center solutions to heavy equipment rentals, and cutting-edge technology systems, Maqsood is your trusted partner for all your project needs.</p>
        <Link className="Business" to="/Menu">
          <StyledButton>OUR BUSINESSES</StyledButton>
        </Link>
      </div>

      <motion.div
        className="home2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="headerContainer2">
          <p className="inside1">WE'VE DELIVERED SOME OF THE MOST</p>
          <h1 className="inside">ICONIC PROJECTS</h1>
          <p className="inside2">From iconic landmarks to awe-inspiring developments, MAQSAD has consistently delivered exceptional projects that redefine the built environment. With unrivaled expertise and a passion for excellence, we have left an indelible mark on the landscape.</p>
          <Link to="/menu">
            <View>View Projects</View>
          </Link>
        </div>
      </motion.div>

      <div className="headerContainer3">
        <h1 className="how">From Skyscrapers to Resorts, to World-Class Museums</h1>
        <p className="lol">Scroll through to see some of our most iconic projects over the last few years</p>
      </div>
      <div className="imagecontainer">
        <img className="i" src={altair} alt="skyscraper"></img>
        <img className="i" src={park} alt="park"></img>
        <img className="i" src={bridge} alt="bridge"></img>
        <img className="i" src={stadium} alt="stadium"></img>
        <img className="i" src={tunnel} alt="tunnel"></img>
        <img className="i" src={hotel} alt="hotel"></img>
      </div>

      <motion.div
        className="home4"
        initial={{ opacity: 0, boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
        animate={{ opacity: 1, boxShadow: '0 0 0px rgba(0, 0, 0, 0.0)' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        style={{
          backgroundImage: `url(${plan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="headerContainer4">
          <p className="inside3">WE BRING</p>
          <h1 className="inside2">A CULTURE OF INNOVATION</h1>
          <p className="inside2">
            MAQSAD focuses on fostering a culture of innovation that is key to our business and enhances solid collaboration and constant efficiency among our projects and support services.
          </p>
        </div>
      </motion.div>

      <div className="BSI_logo">
        <h1 className="certified">Certified Excellence</h1>
        <p>Recognized with the BSI BIM Design and Construction KITEMARK™, we uphold industry-leading standards in digital building information modeling (BIM). This certification underscores our commitment to precision, efficiency, and innovative project delivery.</p>
        <Logo src={BSI} alt="BSI logo" />
        <p>In 2022, MASQSAD achieved BIM kitemark certification for design construction, and commissioning in accordance with ISO 196501:2018 & ISO 19650-2:2018 following the assessment of projects which includes client satisfaction and collaborative engagement with the delivery team</p>
      </div>

      <motion.div
        className="home4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        style={{ backgroundImage: `url(${Appose})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container5">
          <p className="life">LIFE AT MAQSAD</p>
          <h1 className="We_value">We Value Our People</h1>
          <div className="paragraphs">
            <div className="leftparagraph">
              <p className="say">At MAQSAD, our working culture is more than just a set of demands; it is a way of life. We are committed to fostering a positive, supportive, and fulfilling work environment that brings out the best in each of us. Together, we strive for excellence, uphold our values, and create a workplace where sensitivity, collaboration, and growth thrive.</p>
            </div>
            <div className="rightparagraph">
              <p className="say">At MAQSAD, our working culture is more than just a set of demands; it is a way of life. We are committed to fostering a positive, supportive, and fulfilling work environment that brings out the best in each of us. Together, we strive for excellence, uphold our values, and create a workplace where sensitivity, collaboration, and growth thrive.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <h1 className="latestnews">Latest News</h1>
      <div className="newscontainer">
        <div className="news">
          <div className="news-item">
            <img src={Block} alt="Block Work Design Improvement" className="news-image" />
            <div className="news-date">June 14, 2024</div>
            <div className="news-title">Block Work Design Improvement</div>
          </div>
          <div className="news-item">
            <img src={Cyber} alt="Strengthening Cyber Security in Construction" className="news-image" />
            <div className="news-date">June 14, 2024</div>
            <div className="news-title">Cyber Security in Construction</div>
          </div>
        </div>
        <div className="news">
          <div className="news-item">
            <img src={Modern} alt="Modern Methods of Construction" className="news-image" />
            <div className="news-date">June 14, 2024</div>
            <div className="news-title">Modern Methods of Construction</div>
          </div>
          <div className="news-item">
            <img src={Community} alt="Community impact" className="news-image" />
            <div className="news-date">June 14, 2024</div>
            <div className="news-title">Community impact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
