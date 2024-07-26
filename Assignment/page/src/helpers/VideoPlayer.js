import React, { useState, useEffect } from 'react';
import '../styles/Video.css';
import styled from 'styled-components';
import sampleVideo from '../assets/Home_video.mp4';

const InsideVideo = styled.h1`
  font-size: 2.5em;
  color: #ffffff;
  margin: 0.5em 0;
`;

const Group = styled.h1`
  font-size: 2.5em;
  color: #ffffff;
  margin: 0.5em 0;
`;

const We = styled.p`
  font-size: 1.0em;
  color: #ffffff;
  margin: 0.5em 0;
  margin-top: 100px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: transparent;
  color: white;
  border: solid 2px black;
  cursor: pointer;
  margin-bottom: 20px; /* Adjusted margin */
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Example of scaling on hover */
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  border: 2px solid black;
  border-radius: 4px;
  background: transparent;
  color: black;
  outline: none;

  ::placeholder {
    color: black;
  }
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.isFocused || props.hasValue ? '-20px' : '10px')};
  left: 12px;
  color: black;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  font-size: ${(props) => (props.isFocused || props.hasValue ? '0.8rem' : '1.2rem')};
`;

const Head = styled.h1`
`;

function Video() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  useEffect(() => {
    const updateGreeting = () => {
      const currentTime = new Date().getHours();
      let greeting = '';

      if (currentTime >= 5 && currentTime < 12) {
        greeting = 'Good morning';
      } else if (currentTime >= 12 && currentTime < 18) {
        greeting = 'Good afternoon';
      } else {
        greeting = 'Good evening';
      }

      setMessage(`${greeting} ${name ? name : ''}!`);
    };

    updateGreeting();

    const intervalId = setInterval(updateGreeting, 60000); // Update the greeting every minute

    return () => clearInterval(intervalId);
  }, [name]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && name.trim() !== '') {
      setIsNameSubmitted(true);
    }
  };

  return (
    <div className="video-container">
      <Head className="Message">{message}</Head>
      <video className="video" loop autoPlay muted>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        {!isNameSubmitted && (
          <InputContainer>
            <Label isHidden={name !== ''}></Label>
            <Input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </InputContainer>
        )}
        <We>WE ARE AN</We>
        <InsideVideo>Innovative Construction</InsideVideo>
        <Group>Group</Group>
        <StyledButton>Login</StyledButton>
      </div>
    </div>
  );
}

export default Video;
