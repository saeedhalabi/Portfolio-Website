import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to handle navigation item click
  const handleNavigationClick = () => {
    setShowMobileMenu(false); // Close the mobile menu
  };

  return (
    <>
      {/* Navbar component */}
      <nav className="navbar-wrapper">
        <div className="content">
          {/* Brand/logo */}
          <h5>Saeed.</h5>
          {/* Main menu */}
          <ul className={`main-menu ${showMobileMenu ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                className="nav-item"
                onClick={handleNavigationClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-item"
                onClick={handleNavigationClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="nav-item"
                onClick={handleNavigationClick}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="nav-item"
                onClick={handleNavigationClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-item"
                onClick={handleNavigationClick}
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile menu toggle button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="menu-btn"
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMobileMenu}
          >
            {showMobileMenu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
