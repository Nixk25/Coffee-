import React from 'react'
import "./Landingpage.css"
import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom"
import Nav from "../../Navbar/Nav"




const Landingpage = () => {
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("navbar").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
  return (
    <section className='landingPage'>
      <div className="bg-image"></div>
      <div className="container">
      <div className="nav">
        <div className="logo">
          <a href="/"><img src={logo} alt="logo of brewtique" /></a>
        </div>
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
        <div class="menu-bg" id="menu-bg"></div>
        <Nav/>
      </div>
      <div className="texts">
        <div className="main-text">Enjoy your <span className='colored'>coffee</span> <br /> before work</div>
        <div className="second-text">Boost your <span className='colored'>productivity</span> and build your <br /> mood with a <span className='colored'>a cup of our coffee</span> in the morning</div>
        <Link className='order-btn__link' to="/Contact"><button className='order-btn'>Book Now</button></Link>
      </div>
      </div>
    </section>
  )
}

export default Landingpage