import React from "react";

const Projects = () => {
  return (
    <div className="container text-center py-5" style={{ minHeight: "80vh" }}>
      <h1 className="mb-4">Projects</h1>

      <h4 className="text-primary mb-3">
     This page is currently under development.
      </h4>

      <p className="lead">
        I'm working on showcasing my projects with detailed descriptions,
        technologies used, and live demos.
      </p>

      <p>
        Meanwhile, you can explore all of my projects on GitHub.
      </p>

      <a
        href="https://github.com/bodhekarvarad"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark btn-lg mt-3"
      >
        <i className="fa-brands fa-github me-2"></i>
        Visit My GitHub
      </a>
    </div>
  );
};

export default Projects;