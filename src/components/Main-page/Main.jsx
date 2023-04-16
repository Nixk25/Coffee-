import React from 'react'
import LandingPage from "../Landingpage/Landingpage"
import Popular from "../Popular/Popular"
import Menu from "../Menu/Menu"
import About from "../About/About"
import Delivery from "../Delivery/Delivery"
import Testimonials from "../Testimonials/Testimonials"
import Newsletter from "../Newsletter/Newsletter"

const Main = () => {
  return (
    <>
    <LandingPage/>
    <Popular/>
    <Menu/>
    <About/>
    <Delivery/>
    <Testimonials/>
    <Newsletter/>
    </>
  )
}

export default Main