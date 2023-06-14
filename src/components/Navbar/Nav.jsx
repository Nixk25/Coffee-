import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
      <div className="container-links">
        <div className="links">
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/About">About us</NavLink>
          <NavLink className='link' to="/Contact">Contact us</NavLink>
          </div>
      </div>
  )
}

export default Nav