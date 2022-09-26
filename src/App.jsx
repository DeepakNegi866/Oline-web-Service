import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from './Footer';
import Registration from './Registration';
import Login from './Login';



const App =() =>
{
  return (
  <>
  <Navbar  />
  <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/services" element={<Services />} />
    <Route  path="/registration" element={<Registration />} />
    <Route  path="/login" element={<Login/>} />
    </Routes> 
    <Footer />     
  </>
  );
};
export default App;
