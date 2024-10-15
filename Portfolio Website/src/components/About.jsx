import React from "react";
import "./About.scss";
import line from "../assets/Line 1.png";
import aboutImage from "../assets/About picture.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="text-container">
        <h3>
          <span>About</span> Me
        </h3>
        <img src={line} alt="Line" className="line" loading="lazy" />
        <p>
          Hello! I'm Saeed Halabi, a frontend web developer passionate about
          crafting beautiful, <br /> user-friendly interfaces. I stay updated
          with the latest frontend technologies to create <br /> engaging
          digital experiences. When I'm not coding, I enjoy reading books.
          Explore my <br /> portfolio and let's chat about frontend development!
        </p>
      </div>
      <div className="image-container">
        <img
          src={aboutImage}
          alt="About Me"
          className="about-image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
