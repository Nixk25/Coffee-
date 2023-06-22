import React, { useEffect } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import "animate.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  useEffect(() => {
    const navbar = document.getElementById("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("nav-colored");
      } else {
        navbar.classList.remove("nav-colored");
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="nav" id="nav">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo of brewtique" />
          </a>
        </div>
        <div className="container-links ">
          <div className="links animate__animated animate__bounceInDown animate__duration-1s animate__delay-1s">
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/About">
              About us
            </NavLink>
            <NavLink className="link" to="/Contact">
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
