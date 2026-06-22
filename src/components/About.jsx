import React from "react";
import "../Style.css"
const About = () => {
  return (
    <div className="row border-bottom">
      <div className="col-6" >
        <h1 className="f-5 about_me mt-5"style={{marginLeft:"7rem"}} ><b>About Me</b></h1>
        <p className=" mt-3"style={{marginLeft:"7rem",letterSpacing:"0.1px", fontStyle: " norma"}}>I am B.E CSE student with a strong interest in Artificial Intelligence,Machine Learning and Full Stack Development.I love sloving real-world problems and building impactful projects. </p>
      </div>
     <div className="col-3 mt-4">
  <div
    className="card text-black border-0 mt-5">
      <p className="card-text mb-3">
       <i class="fa-solid fa-certificate"></i>{" "}
       <b>Diploma:</b>{" "}<span>CSE,(GPK)</span>
       
       
      </p>

      <p className="card-text mb-3">
        <i class="fa-solid fa-graduation-cap"></i>{' '}
       <b>Degree:</b>{" "} <span>B.E CSE</span>
      </p>

      <p className="card-text">
       <i class="fa-solid fa-location-dot"></i>{" "}
        <b>Location:</b>{" "}<span>India</span>
      </p>
    </div>
  </div>
      <div className="col-3 mt-4">
  <div
    className="card text-black border-0 mt-5">
      <p className="card-text mb-3">
      <i class="fa-regular fa-envelope"></i>{" "}
       <b>Email:</b>{" "}<span>varad.bodhekar@gmail.com</span>
      </p>

      <p className="card-text mb-3">
        <i class="fa-solid fa-phone"></i>{' '}
       <b>Phone:</b>{" "} <span>+91 9404350450</span>
      </p>

      <p className="card-text">
      <i class="fa-solid fa-language"></i>{" "}
        <b>Language:</b>{" "}<span>Marathi,Hindi,English</span>
      </p>
    </div>
  </div>
</div>
  
  );
};

export default About;