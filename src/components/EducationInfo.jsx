import React from "react";
import "../Style.css";

const EducationInfo = () => {
  return (
    <div className="education-info border-bottom py-5 border-dark">
      <div className="container">
        <div className="row justify-content-center g-4">

          <div className="col-12 col-lg-5">
            <div className="education-card p-3">
              <h4 className="mb-4">
                <i className="fa-solid fa-user-graduate"></i>{" "}
                Education
              </h4>

              <h5 className="mt-3">
                <b>B.E Computer Science And Engineering</b>
              </h5>

              <p className="mb-0">
                Sipna College Of Engineering And Technology,
                Amravati (Maharashtra)
              </p>

              <p>2023 - 2027</p>

              <h5 className="mt-4">
                <b>Diploma Computer Science And Engineering</b>
              </h5>

              <p className="mb-0">
                Government Polytechnic Khamgaon
              </p>

              <p>2021 - 2024</p>
            </div>
          </div>

       
          <div className="col-12 col-lg-5">
            <div className="education-card p-3">
              <h4 className="mb-4">
                <i className="fa-solid fa-trophy"></i>{" "}
                Achievements
              </h4>

              <ul>
                <li>Developer Program Member (GitHub)</li>
                <li>400+ Contributions on GitHub</li>
                <li>Finalist in HackGenx (National Level Hackathon) 2026</li>
                <li>AWS Academy Graduate</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationInfo;