import React from 'react';
import {SiGmail} from 'react-icons/si';
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <p className="title">Title</p>
        <p>Contact Us directly</p>
        <p padding={60}>
          <SiGmail size={25} />
        company@example.com
        </p>
      </div>
      <div className="info">
        <p><b>Company Name</b></p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="newsletter">
        <p>Subscribe to our Newsletter</p>
        <input label="email" placeholder="Enter your Email here"></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer