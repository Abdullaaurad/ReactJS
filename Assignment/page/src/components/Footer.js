import React from "react";
import "../styles/Footer.css";
import Social from '../components/Social'

function Footer() {
  return (
    <div className="footer">
      <div className="first">
        <div className="leftSide">
          <h3>Sri Lanka - Colombo</h3>
          <p> 120,Marine Drive,</p>
          <p>Wellawatta, Colombo-06</p>
          <br></br>
          <p>P.O.Box: 120</p>
          <br></br>
          <p>Tel: +94714810928</p>
          <p>Tel: +94779991124</p>
          <br></br>
          <p>E-mail: info@Magsad.Colombo</p>
        </div>
        <div className="rightSide">
          <h3>UAE-DUBAI</h3>
          <p> 3601 Marine Plaza,</p>
          <p>Dubai Marina, Dubai, UAE</p>
          <br></br>
          <p>P.O.Box: 27639</p>
          <br></br>
          <p>Tel: +947144290599</p>
          <p>Tel: +947144290216</p>
          <br></br>
          <p>E-mail: info@Magsad.UAE</p>
          <br></br>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default Footer;
