import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="content">
          <h5>Saeed.</h5>
          <ul>
            <li>
              <a href="#" className="nav-item">
                Home
              </a>
              <a href="#" className="nav-item">
                About
              </a>
              <a href="#" className="nav-item">
                Resume
              </a>
              <a href="#" className="nav-item">
                Projects
              </a>
              <a href="#" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
          <button className="menu-btn" onClick={() => {}}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
