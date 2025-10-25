import React from "react";
import hotspotpic from "../../assets/background/blinking_lights.gif";
import "./Hotspot.css";
import logo from "../../assets/background/logo.png";

function Hotsports() {
  return (
    <>
      <div className="hotsport-container">
        
        {/* Image Section */}
        <div className="hotsportpic">
          <img src={hotspotpic} alt="Hotspot" />
        </div>

        {/* Text + Buttons Section */}
        <div className="hotsporttext">

          {/* Optional Logo (if used) */}
          {/* 
          <div className="hotspaceLogo">
            <img src={logo} alt="Logo" className="hotspaceLogoimg" />
          </div>
          */}

          <div className="heading">
            I am here to meet your digital || vision ||
          </div>

          <div className="Btncontainer">

            {/* Download CV Button */}
            <a
              href="/cv/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hotspotButton"
            >
              {/* Animated bubbles */}
              <div className="bubble-layer bubble-1"></div>
              <div className="bubble-layer bubble-2"></div>
              <div className="bubble-layer bubble-3"></div>
              <div className="bubble-layer bubble-4"></div>
              <div className="bubble-layer bubble-5"></div>
              <div className="bubble-layer bubble-6"></div>
              <div className="bubble-layer bubble-7"></div>

              <span>Download CV</span>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Hotsports;
