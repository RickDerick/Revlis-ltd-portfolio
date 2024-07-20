import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import renewableEnergy from "../../img/renewable-energy.mp4";

const Intro = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <video autoPlay loop muted className="background-video" style={{color: darkMode?'var(--white)':''}}>
        <source src={renewableEnergy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <video autoPlay loop muted className="background-video">
        <source src={renewableEnergy} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay"></div>
      <div className="content" style={{color: darkMode?'var(--white)':''}}>
        <h4>Welcome to Revlis Engineering Ltd</h4>
        <p>We're thrilled to have you here!.</p>
        {/* <button>Learn More</button> */}
      </div>
    </div>
  );
};

export default Intro;
