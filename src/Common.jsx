import React from 'react'
import { NavLink } from "react-router-dom";
// import image from "../src/projectpic.jpg";
// import web from "../src/businessGrowing.jpg";

const Common = (props)=>
{ 
    return(
        <>
<section id="header" className="">
     <div className="container-fluid"> 
     <div className="row">
         <div className="  midpart" >
       <div className=" Main-div">
         <h1>{props.name} </h1>
          <h1> <strong className="brand-name">DeepakTechnical</strong>
           </h1>
         <h2 className="my-3">
           We are the team of talented developer making
           </h2>
         <div className="mt-3">
           <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
           </div>
       </div> 
       <div className="col-lg-6 order-2 order-lg-2 header-img ">
         <img src={props.imgsrc}  className="img-fluid animated" alt="noimage" />
       </div>
     </div>
     </div>
     </div>
   </section>
   </>
    );
}
export default Common;