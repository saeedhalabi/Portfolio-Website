import React from "react";
import "./Projects.scss";
import BrewBuddy from "../assets/brewbuddy-pic.jpeg";
import TheQuest from "../assets/thequest.jpeg";
import FortniteTimeWarp from "../assets/fn-timewarp.jpeg";
import TicTacToe from "../assets/tic_tac_toe.jpg";

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
      title: "Tic Tac Toe",
      description: "Tic Tac Toe: A Classic Game of Strategy and Fun",
      image: TicTacToe,
      liveLink: "https://saeedhalabi-tic-tac-toe-game.netlify.app/",
    },
    {
      id: 3,
      title: "Fortnite TimeWarp",
      description:
        "a simple and friendly website where I share my gaming journey, fun moments with friends, and connect with other gamers.",
      image: FortniteTimeWarp,
      liveLink: "https://fortnite-gaming-timeline.netlify.app/",
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
