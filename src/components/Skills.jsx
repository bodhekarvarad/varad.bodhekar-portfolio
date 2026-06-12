import React from "react";
const Skills=()=>{
    return(
<div className="row mt-2">
    <h1 className="text-center skills f-5"><b>Skills</b></h1>
   <div className="col-4">
      <div className="card text-black border-0 mt-5 text-center">
      <h3 className="card-text mb-3 mx-3  ">
       <i class="fa-solid fa-code text-primary"></i>{" "}<span>Languages</span>
      </h3>
     <div>
        <ul>
            <li>
            Python
        </li>
         <li>
            Java
        </li>
         <li>
            JavaScript
        </li>
         <li>
            SQL
        </li>
        </ul>
     
      </div>
    
      </div>
   </div>
</div>
    )
}
export default Skills;