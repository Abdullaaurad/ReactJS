import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Contacting from "../assets/Contact.png";
import "../styles/Contact.css";
import styled from 'styled-components';
import CallIcon from '../assets/call.svg';
import ChatIcon from '../assets/chat.svg';

const Button = styled.button`
  color: white;
  border-radius: 10px;
  background-color: #002855;
  padding: 15px 0;
  margin: 20px 35%;
  text-align: center;
  width: 30%;

  &:hover {
    transform: scale(1.1);
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\(?\d{3}\)?[- .]?\d{3}[- .]?\d{4}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form data:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  };

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  return (
    <div className="contact">
      <div className="contact-bg" style={{ backgroundImage: `url(${Contacting})` }}>
        <animated.div className="Inside" style={imageAnimation}>
          <p className="Insidep">Contact us</p>
          <h1 className="Insideh">Have a Question?</h1>
        </animated.div>
      </div>
      <div className="Theform">
        <p className="Insideform">
          We are here to answer any questions you may have and provide the support you need.
          Please feel free to reach out to us using the contact information below or by filling out the contact form.
          We look forward to hearing from you and discussing how we can assist with your construction projects.
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name" type="text" />
          {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}

          <label htmlFor="last-name">Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name" type="text" />
          {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}

          <label htmlFor="email">Email</label>
          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Your email" type="email" />
          {formErrors.email && <span className="error">{formErrors.email}</span>}

          <label htmlFor="phone">Phone</label>
          <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(070) 777-7777" type="tel" />
          {formErrors.phone && <span className="error">{formErrors.phone}</span>}

          <label htmlFor="message">Message</label>
          <textarea rows="6" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}

          <Button>SUBMIT</Button>
        </form>
      </div>
      <div className="Sales_and_Support">
        <div className="leftContact">
          <h1 className="Talk" >Talk to Desk</h1>
          <p>Interested in our construction services? Pick up the phone and chat with a member of our team today! We’re here to help you build your dreams</p>
          <img className="callIcon" src={CallIcon} alt="Call-Icon"/>
          <p className="app"> +9471 481 0928</p>
        </div>
        <div className="rightContact">
          <h1 className="Talk" >Contact Customer Support</h1>
          <p>Need assistance? Our customer support team is ready to help! Give us a call, and we’ll resolve your issues promptly and professionally.</p>
          <img className="chatIcon" src={ChatIcon} alt="Call-Icon"/>
          <p className="app"> Whatsapp</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

