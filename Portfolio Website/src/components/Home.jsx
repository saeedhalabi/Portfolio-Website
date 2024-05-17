import React from "react";
import "./Home.scss";
import SaeedAura from "../assets/saeedaura.png";
import resume from "../assets/CV.pdf";
const Home = () => {
  return (
    <div className="hero-title" id="home">
      <h1>
        <span>Frontend</span> Developer
      </h1>
      <p>
        Specializing in Frontend, I leverage cutting-edge <br /> technologies to
        bring web projects to life.
      </p>
      <section className="hero">
        <img src={SaeedAura} alt="" className="hero-img" />
      </section>
      <button className="btn-download">
        <a href={resume} download className="cv-download">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default Home;
