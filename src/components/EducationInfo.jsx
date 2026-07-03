import React from "react";
 const EducationInfo=()=>
 {
 return(
   <div className="education-info border-bottom center">
<div className="row p-3 justify-content-center">
   <div className="col-md-5 p-2 mx-5 justify-content-center">
  <h4 className="my-2 mb-2"><i class="fa-solid fa-user-graduate"></i>{" "}Education</h4>
  <h5 className="my-1 mt-1"><b>B.E  Computer Science And Engineering</b></h5>    
  <p className="mb-0">Sipna College Of Engineering And Technology Amravati(Maharashtra)</p>
  <p>2023-2027</p>

  <h5 className="mb-0"><b>Diploma Computer Science And Engineering</b></h5>    
  <p className="mb-0">Government Polytechnic Khamgaon</p>
  <p >2021-2024</p>
   </div>
   <div className="col-md-5 p-2 mx-5 justify-content-center">
<h4><i class="fa-solid fa-trophy"></i>{" "}Achievements</h4>

<ul>
   <li>
Developer Program Member (GitHub)
   </li>
   <li>
       400+ Contributions on GitHub
   </li>
   <li>
      Finalist in HackGenx (National level Hackathon)2026
   </li>
   <li>
      AWS Academy Graduate
   </li>
</ul>

   </div>
 
  
</div>
   </div>
 )

 }
 export default EducationInfo;