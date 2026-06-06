import React from "react";
import './Style.css'
const Navbar = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container p-2">
          <a className="navbar-brand " href="/"><b>
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
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
         style={{marginLeft:"40%"}}
          >
            <ul className="navbar-nav me-auto ">
              <li className="nav-item mx-2">
                <a className="nav-link active " aria-current="page" href="/">
                  Home
                </a>
              </li>
               <li className="nav-item mx-2">
                <a className="nav-link active " aria-current="page" href="/about">
                  About
                </a>
              </li>
               <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/skills">
                  Skills
                </a>
              </li>
               <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/education">
                  Education
                </a>
              </li>
               <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/resume">
                Resume
                </a>
              </li>
               <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/contact">
                Contact
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;