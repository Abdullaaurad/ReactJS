import React, { useState } from "react";
import Img from "../assets/About.png";
import "../styles/About.css";
import bag from '../assets/bag.png'
import bulb from '../assets/bulb.png'
import chess from '../assets/chess.png'
import History from '../assets/history.png'
import { useSpring, animated } from "react-spring";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import person from "../assets/person.png";

const moveFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Bag = styled.img`
  width: 120px; /* Adjust image size */
  height: 120px; /* Adjust image size */
  margin-bottom: 10px; 
  animation: ${moveFromTop} 1s ease forwards;

  &:hover {
    transform: scale(1.2);
  }
`;

const Chess = styled.img`
  width: 120px; /* Adjust image size */
  height: 120px; /* Adjust image size */
  margin-bottom: 10px; 
  animation: ${moveFromTop} 1s ease forwards;

  &:hover {
    transform: scale(1.2);
  }
`;

const Bulb = styled.img`
  width: 120px; /* Adjust image size */
  height: 120px; /* Adjust image size */
  margin-bottom: 10px; 
  animation: ${moveFromTop} 1s ease forwards;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #002855;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px; /* Adjusted margin */
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Example of scaling on hover */
  }
`;

function About() {
  const [showNavigation, setShowNavigation] = useState(false); // State to toggle navigation visibility

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Img})` }}>
        <button className="navigation-toggle" onClick={toggleNavigation}>
          Navigation
        </button>
      </div>
      <animated.div className="container" style={imageAnimation}>
        {/* Collapsible Navigation */}
        {showNavigation && (
          <div className="navigation">
            <ul>
              <li><a href="#aboutMAQSAD" onClick={toggleNavigation}>About MAQSAD</a></li>
              <li><a href="#values" onClick={toggleNavigation}>Values</a></li>
              <li><a href="#history" onClick={toggleNavigation}>History</a></li>
            </ul>
          </div>
        )}
        <p>our story</p>
        <h1>Construction Delivered</h1>
      </animated.div>
      <div className="aboutBottom" id="aboutMAQSAD">
        <h2>About MAQSAD</h2>
        <p>MAQSAD Engineering & Contracting LLC, part of the Investments Corporation Of Dubai (ICD), is a large construction company with related business operating in the UAE and as of 2022, Sri Lanka. MAQSAD also has an ongoing presence in Ethiopia and Oman.</p>
        <p>MAQSAD has consistently evolved and grown over the last 25 years to become a trusted partner for the execution of complex and iconic construction projects. Quality, Safety, Functionality, and Aesthetic are of the utmost importance to the company when building and providing construction solutions for clients.</p>
      </div>
      <h2 className="value"> Values</h2>
      <div className="list">
        <div className="left" id="values">
          <Bag src={bag} alt="bag" />
          <h4>Experience</h4>
          <p>MAQSAD has extensive experience in complex projects across a variety of sectors, which include airports, retail, hotels & resorts, high-rise buildings, and themed projects as well as providing its clients with the services of construction management, design management, estimation, cost planning, and procurement services.</p>
        </div>
        <div className="middle">
          <Chess src={chess} alt="Chess" />
          <h4>Strategic Project Delivery</h4>
          <p>MAQSAD has recently introduced a new strategic division to provide practical construction design advice in the early stages the project, which in turn optimizes and reduces the cost of the project, while getting design expertise in the project definition stage.</p>
        </div>
        <div className="right">
          <Bulb src={bulb} alt="Bulb" />
          <h4>Turnkey Project Solutions</h4>
          <p>This evolution and enhancement of our solution portfolio ensures we are able to deliver the most comprehensive value to our clients. MAQSAD is able to offer its clients a complete, MEP, fit-out, energy solutions, data center solutions, heavy equipment rentals and technology</p>
        </div>
      </div>
      <div className="history" id="history">
        <img className="k" src={History} alt="bulb"></img>
      </div>
      <div className="aboutBottom">
        <h2>History of MAQSAD</h2>
        <p>MAQSAD's journey began with a vision to deliver innovative and sustainable projects across various sectors, including commercial, residential, hospitality, and infrastructure. MAQSAD's commitment to excellence and adherence to international standards quickly earned them a reputation for delivering high-quality projects on time and within budget.</p>
        <Link className="Business" to="/Menu">
          <StyledButton>OUR BUSINESSES</StyledButton>
        </Link>
      </div>
      <div className="TeamMember">
        <div className="leftPerson">
          <img className="person" src={person} alt="Person"></img>
          <h3> S.A.Abdulla </h3>
          <p className="Description"> Founder</p>
        </div>
        <div className="middlePerson">
          <img className="person" src={person} alt="Person"></img>
          <h3> Frank Gehry </h3>
          <p className="Description">Director</p>
        </div>
        <div className="rightPerson">
          <img className="person" src={person} alt="Person"></img>
          <h3> Zaha Hadid </h3>
          <p className="Description">Chief Executive Officer</p>
        </div>
      </div>
      <div className="TeamMember">
        <div className="leftPerson">
          <img className="person" src={person} alt="Person"></img>
          <h3> Renzo Piano </h3>
          <p className="Description">Chief Operating Officer</p>
        </div>
        <div className="middlePerson">
          <img className="person" src={person} alt="Person"></img>
          <h3> Kamillia AiMarashi </h3>
          <p className="Description">Commercial Director</p>
        </div>
        <div className="rightPerson">
          <img className="person" src={person} alt="Person"></img>
          <h3> Santiago Calatrava </h3>
          <p className="Description">Managing Director</p>
        </div>
      </div>
    </div>
  );
}

export default About;
