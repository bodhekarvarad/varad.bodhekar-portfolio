import React from "react";

const Resume = () => {
  return (
    <div className="resume py-5">
      <div className="container">
        <div className="row align-items-center">
          
    
          <div className="col-md-8">
            <div className="d-flex align-items-center mb-3">
              <i className="fa-solid fa-align-right text-light fs-2 me-3"></i>
              <h3 className="text-light mb-0">Resume</h3>
            </div>

            <p className="text-light mx-0">
              You can download my resume to know more about my experience,
              skills, projects, and technical expertise.
            </p>
          </div>

          <div className="col-md-3 text-md-end text-center mt-4 mt-md-0">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download me-2"></i>
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;