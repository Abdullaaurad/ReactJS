// Team.js

import React from 'react';
import PersonImage from '../assets/person.png';

function Team() {
  return (
    <div>
      <h2>Our Team</h2>
      <img src={PersonImage} alt="Team" />
      <p>
        Meet our talented team members who drive our company forward...
      </p>
    </div>
  );
}

export default Team;
