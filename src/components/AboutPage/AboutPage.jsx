import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from "../Footer/Footer"
import AboutUs from './mainAboutUs/AboutUs'
import ChooseUs from './ChooseUs/ChooseUs'
import Process from './Process/Process'
import Menu from "../Menu/Menu"


const AboutPage = () => {
  return (
    <>
      <Nav/>
      <Menu/>
      <AboutUs/>
      <ChooseUs/>
      <Process/>
      <Footer/>
    </>
  )
}

export default AboutPage