import React  from "react";
import Navbar from "./Navbar";
import "./Style.css"
const Hero=()=>{
    return(
        <div className="hero-bg">
          <div className="col-6">
          <div className="row" id="hero-name">
            <h3 className="text-white mt-3"><b>Hi,I'm</b></h3>
            <h1 className="text-white mt-2"> <b>Varad</b> <span className="name"><b>Bodhekar</b></span></h1>
            <h4 className="text-primary text-wrap p-1 mt-1">AI/ML Enthusiast | MERN Stack | Android </h4>
            <p className="f-1 text-white mt-1"><b>B.E student passinate about building intelligent solution using Machine and Web Technologies</b></p>
            <div className="col">
     <button className="btn btn-primary btn-lg mx-1">View Projects</button>
     <button className="btn btn-outline-light mx-3"> Download Resume <i class="fa-solid fa-download"></i></button>
           <button className="btn btn-outline-light mx-1"><i class="fa-regular fa-envelope"></i> Contact Me</button>
            </div>
          </div>
         
        </div>
        </div>
    );
}
export default Hero;