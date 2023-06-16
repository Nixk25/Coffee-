import React from 'react'
import LandingPage from "../mainLandingPage/Landingpage/Landingpage"
import Popular from "../mainLandingPage/Popular/Popular"
import MenuPage from "../mainLandingPage/MenuPage/Menu"
import Testimonials from "../mainLandingPage/Testimonials/Testimonials"
import Newsletter from "../mainLandingPage/Newsletter/Newsletter"
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import Menu from '../Menu/Menu'


const Main = () => {
  return (
    <>
    <Nav/>
    <Menu/>
    <LandingPage/>
    <Popular/>
    <MenuPage/>
    <Testimonials/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Main