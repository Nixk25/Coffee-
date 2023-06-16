import React from 'react'
import { Link } from 'react-router-dom';
import "./Menu.css"


const Menu = () => {
    function menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("navbar").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
      }
  return (
    <>
        <div id="menu">
          <div id="menu-bar" onClick={menuOnClick}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
          <nav className="navbar" id="navbar">
            <ul>
              <li><Link className='menu-link' to="/">Home</Link></li>
              <li><Link className='menu-link' to="/About">About us</Link></li>
              <li><Link className='menu-link' to="/Contact">Contact us</Link></li>
            </ul>
          </nav>
        </div>
        <div className="menu-bg" id="menu-bg"></div> 
    </>
    
  )
}

export default Menu