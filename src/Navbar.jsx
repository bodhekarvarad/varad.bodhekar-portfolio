import React from "react";
import "./Style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <a className="navbar-brand" href="#">
          <b>
            Varad <span className="name">Bodhekar</span>
          </b>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#resume">
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;