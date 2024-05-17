import React from "react";
import "./Footer.scss";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>&copy; Saeed Halabi {currentYear}</footer>
    </>
  );
};

export default Footer;
