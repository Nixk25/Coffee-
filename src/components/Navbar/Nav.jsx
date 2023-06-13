import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className="container-links">
      <div className="links">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/About">About us</Link>
        <Link className='link' to="/Contact">Contact us</Link>
        </div>
    </div>
  )
}

export default Nav