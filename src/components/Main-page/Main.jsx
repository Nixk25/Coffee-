import React from 'react'
import LandingPage from "../mainLandingPage/Landingpage/Landingpage"
import Popular from "../mainLandingPage/Popular/Popular"
import Menu from "../mainLandingPage/Menu/Menu"
import Testimonials from "../mainLandingPage/Testimonials/Testimonials"
import Newsletter from "../mainLandingPage/Newsletter/Newsletter"
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