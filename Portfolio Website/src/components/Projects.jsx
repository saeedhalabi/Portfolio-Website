import React from "react";
import "./Projects.scss";
import BrewBuddy from "../assets/brewbuddy-pic.jpeg";
import TheQuest from "../assets/thequest.jpeg";
import EvolveLab from "../assets/evolvelab.jpeg";
import DragonRepeller from "../assets/dragonrepeller.jpeg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BrewBuddy",
      description:
        "BrewBuddy is your go-to app for exploring a variety of coffee options and managing your orders with ease.",
      image: BrewBuddy,
      liveLink: "https://brewbuddy.netlify.app/",
    },
    {
      id: 2,
      title: "Dragon Repeller",
      description:
        "Dragon Repeller is an interactive web app where users strategically deploy defenses to protect their kingdom from mythical dragons.",
      image: DragonRepeller,
      liveLink: "https://game-rpg-dragon-repeller.netlify.app/",
    },
    {
      id: 3,
      title: "Evolve Lab",
      description:
        "Evolve Lab is a React application that enables users to submit, filter, and vote on innovative ideas with a responsive and engaging interface.",
      image: EvolveLab,
      liveLink: "https://evolve-lab.netlify.app/",
    },
    {
      id: 4,
      title: "The Quest",
      description: "The Quest: An Adventure of Infinite Stories",
      image: TheQuest,
      liveLink: "https://saeedhalabi-thequest.netlify.app/",
    },
  ];

  return (
    <div className="container" id="projects">
      <h1>
        <span>My</span> Services
      </h1>
      {projects.map(project => (
        <a
          key={project.id}
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Projects;
