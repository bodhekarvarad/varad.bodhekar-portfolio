import React from "react";
import "../Style.css";

const About = () => {
  return (
    <div className="row border-bottom py-5">

      {/* Left Section */}
      <div className="col-12 col-lg-6">
        <h1 className="about_me mt-5 about-heading">
          <b>About Me</b>
        </h1>

        <p className="mt-3 about-text">
          I am a B.E. CSE student with a strong interest in Artificial
          Intelligence, Machine Learning, and Full Stack Development. I love
          solving real-world problems and building impactful projects.
        </p>
      </div>

      {/* Middle Card */}
      <div className="col-12 col-md-6 col-lg-3 mt-4">
        <div className="card text-black border-0 mt-lg-5 info-card">
          <div className="card-body">

            <p className="card-text mb-3">
              <i className="fa-solid fa-certificate"></i>{" "}
              <b>Diploma:</b> <span>CSE (GPK)</span>
            </p>

            <p className="card-text mb-3">
              <i className="fa-solid fa-graduation-cap"></i>{" "}
              <b>Degree:</b> <span>B.E CSE</span>
            </p>

            <p className="card-text">
              <i className="fa-solid fa-location-dot"></i>{" "}
              <b>Location:</b> <span>India</span>
            </p>

          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="col-12 col-md-6 col-lg-3 mt-4">
        <div className="card text-black border-0 mt-lg-5 info-card">
          <div className="card-body">

            <p className="card-text mb-3">
              <i className="fa-regular fa-envelope"></i>{" "}
              <b>Email:</b>{" "}
              <span>varad.bodhekar@gmail.com</span>
            </p>

            <p className="card-text mb-3">
              <i className="fa-solid fa-phone"></i>{" "}
              <b>Phone:</b>{" "}
              <span>+91 9404350450</span>
            </p>

            <p className="card-text">
              <i className="fa-solid fa-language"></i>{" "}
              <b>Language:</b>{" "}
              <span>Marathi, Hindi, English</span>
            </p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;