// Values.js

import React from 'react';
import BagImage from '../assets/bag.png';
import ChessImage from '../assets/chess.png';
import BulbImage from '../assets/bulb.png';

function Values() {
  return (
    <div>
      <h2>Our Values</h2>
      <div className="valueList">
        <div>
          <img src={BagImage} alt="Experience" />
          <h4>Experience</h4>
          <p>
            MAQSAD has extensive experience in complex projects across a variety of sectors...
          </p>
        </div>
        <div>
          <img src={ChessImage} alt="Strategic Project Delivery" />
          <h4>Strategic Project Delivery</h4>
          <p>
            MAQSAD has introduced a new strategic division to provide practical construction design advice...
          </p>
        </div>
        <div>
          <img src={BulbImage} alt="Turnkey Project Solutions" />
          <h4>Turnkey Project Solutions</h4>
          <p>
            This evolution and enhancement of our solution portfolio ensures we are able to deliver...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
