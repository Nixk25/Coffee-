import React from 'react'
import "./Landingpage.css"
import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom"





const Landingpage = () => {
  return (
    <section className='landingPage'>
      <div className="bg-image"></div>
      <div className="container">
      <div className="nav">
        <div className="logo">
          <a href="/"><img src={logo} alt="logo of brewtique" /></a>
        </div>
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