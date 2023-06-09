import React from 'react'
import LandingPage from "../Landingpage/Landingpage"
import Popular from "../Popular/Popular"
import Menu from "../Menu/Menu"
import Testimonials from "../Testimonials/Testimonials"
import Newsletter from "../Newsletter/Newsletter"
import Footer from '../Footer/Footer'


const Main = () => {
  return (
    <>
    <LandingPage/>
    <Popular/>
    <Menu/>
    <Testimonials/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Main