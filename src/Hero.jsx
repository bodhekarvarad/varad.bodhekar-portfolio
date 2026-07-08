import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="row hero-bg align-items-center">
   
      <div className="col-12 col-lg-6">
        <div id="hero-name">
          <h3 className="text-white mt-3">
            <b>Hi, I'm</b>
          </h3>

          <h1 className="text-white mt-2">
            <b>Varad Bodhekar</b> 
          </h1>

          <h4 className="text-primary mt-1">
            AI/ML Enthusiast | MERN Stack | Android
          </h4>

          <p className="text-white mt-3">
            <b>
              B.E student passionate about building intelligent solutions using
              Machine Learning and Web Technologies
            </b>
          </p>

          <div className="d-flex flex-wrap gap-2 mt-4">
            <Link to="/projects">
            <button  className="btn btn-primary btn-lg">
              View Projects
            </button>
</Link>
            <a
              href="/resume.pdf"
              download
              className="btn btn-outline-light"
            >
              Download Resume <i className="fa-solid fa-download"></i>
            </a>
             <Link to="/contact">
            <button className="btn btn-outline-light">
              <i className="fa-regular fa-envelope"></i> Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
        <div className="card what-i-do-card text-white border-0">
          <div className="card-body p-4">
            <h4 className="card-title mb-4">What I Do</h4>

            <p className="card-text mb-3">
              <i className="fa-solid fa-robot me-3"></i>
              Build Machine Learning Models
            </p>

            <p className="card-text mb-3">
              <i className="fa-solid fa-code me-3"></i>
              Develop Full Stack Web Applications
            </p>

            <p className="card-text">
              <i className="fa-solid fa-globe me-3"></i>
              Solve Real-world Problems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;