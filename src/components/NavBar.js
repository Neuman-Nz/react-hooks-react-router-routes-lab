import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block",
  width: "50px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="./Home" style={linkStyles}>Home</NavLink>
      <NavLink to="/movies" style={linkStyles}>Movies</NavLink>
      <NavLink to="/directors" style={linkStyles}>Directors</NavLink>
      <NavLink to="/actors" style={linkStyles}>Actors</NavLink>
    </div>
  );
}

export default NavBar;

