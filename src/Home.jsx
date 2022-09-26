import React from "react";
import Common from "./Common";
import image from "../src/projectpic.jpg";


const Home =() =>
{
  return (
  <>
   <Common 
   name="Grow your business with"
   imgsrc={image}
   visit="/about"
   btname="Get Started"
   />
  </>
  );
};
export default Home;