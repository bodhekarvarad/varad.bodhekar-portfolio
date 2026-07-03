import React from "react";

const Skills = () => {
  return (
    <div className="container border-bottom">
      <h1 className="text-center skills mt-4">
        <b>Skills</b>
      </h1>

      <div className="row mt-5 text-center ">
        <div className="col-md-3">
          <div className="card border-0">
            <h3>
              <i className="fa-solid fa-code text-primary-emphasis"></i> Languages
            </h3>
            <ul className="list-unstyled">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <h3>
              <i className="fa-solid fa-brain text-primary-emphasis"></i> AI/ML
            </h3>
            <ul className="list-unstyled">
              <li>NumPy</li>
              <li>Pandas</li>
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 ">
            <h3>
              <i className="fa-solid fa-globe text-primary-emphasis"></i> Web Dev
            </h3>
            <ul className="list-unstyled">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
               <li>Node.js</li>
                <li>Express.js</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <h3>
              <i className="fa-solid fa-screwdriver-wrench text-primary-emphasis"></i> Tools
            </h3>
            <ul className="list-unstyled">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Jupyter Notebook</li>
              <li>Android Studio</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;