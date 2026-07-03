import React from "react";
const Footer = () => {
      const year = new Date().getFullYear();
  return (
    <footer className="bg-black py-3">
      <p className="text-white text-center mb-0">
        <i className="fa-regular fa-copyright"></i>
        <b> {year} Varad Bodhekar. All Rights Reserved.</b>
      </p>
    </footer>
  );
};

export default Footer;