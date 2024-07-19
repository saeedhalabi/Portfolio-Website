import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import SaeedAura from "../assets/saeedaura.png";
import resume from "../assets/Saeed Halabi Front End CV.pdf";

const Home = () => {
  return (
    <motion.div
      className="hero-title"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <span>Frontend</span> Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        Specializing in Frontend, I leverage cutting-edge <br /> technologies to
        bring web projects to life.
      </motion.p>
      <section className="hero">
        <motion.img
          src={SaeedAura}
          alt=""
          className="hero-img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        />
      </section>
      <motion.button
        className="btn-download"
        id="resume"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      >
        <a href={resume} download className="cv-download">
          Download CV
        </a>
      </motion.button>
    </motion.div>
  );
};

export default Home;
