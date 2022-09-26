import React from "react";


import { NavLink } from "react-router-dom";

const Navbar = ()=>
{
    return (
        <>
        <nav className="navbar navbar-expand-lg container-fluid d-flex" style={{position:"fixed", top:0,  left:0, zIndex:100, backgroundColor:"#bdfdff", color:"white", width:"100%"}}>
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">ReactProject</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{marginRight:"15px"}}>Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to="/" className="nav-link active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/about" className="nav-link active">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/registration" className="nav-link active">Registration</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/login" className="nav-link active">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/services" className="nav-link active">Services</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    );
};
export default Navbar;