import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
import "animate.css"

const Nav = () => {
  return (
      <div className="container-links ">
        <div className="links animate__animated animate__bounceInDown animate__duration-1s animate__delay-1s">
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/About">About us</NavLink>
          <NavLink className='link' to="/Contact">Contact us</NavLink>
          </div>
      </div>
  )
}

export default Nav