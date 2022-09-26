import React from "react";
import Common from './Common';
import web from "../src/businessGrowing.jpg";

const About =() =>
{
  return (
  <>
  <Common 
   name="Welcome to About page"
   imgsrc={web}
   visit="/registration"
   btname="Get Started"
   />
  </>
  );
};
export default About;