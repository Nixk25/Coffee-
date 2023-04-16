import React from 'react'
import "./Landingpage.css"
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import {HiShoppingCart} from "react-icons/hi"



const Landingpage = () => {
  return (
    <section className='landingPage'>
      <div className="container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo of brewtique" />
        </div>
        <div className="links">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/About">About us</Link>
          <Link className='link' to="/Contact">Contact us</Link>
        </div>
        <div className="cart">
          <Link className='cart-icon' to="/Cart"><HiShoppingCart/></Link>
          <span className=''></span>
        </div>
      </div>
      <div className="texts">
        <div className="main-text">Enjoy your <span className='colored'>coffee</span> <br /> before work</div>
        <div className="second-text">Boost your <span className='colored'>productivity</span> and build your <br /> mood with a <span className='colored'>a cup of our coffee</span> in the morning</div>
        <button className="order-btn">Order now <span className='cart-icon__btn'><HiShoppingCart/></span></button>
      </div>
      </div>
    </section>
  )
}

export default Landingpage