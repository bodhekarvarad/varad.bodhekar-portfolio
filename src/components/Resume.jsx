import React from "react";

const Resume = () => {
  return (
    <div className="resume py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* Left Side */}
          <div className="col-12 col-lg-8 text-center text-lg-start">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
              <i className="fa-solid fa-align-right text-light fs-2 me-3"></i>
              <h3 className="text-light mb-0">Resume</h3>
            </div>

            <p className="text-light resume-text">
              You can download my resume to know more about my experience,
              skills, projects, and technical expertise.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary resume-btn"
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