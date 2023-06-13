import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from "../Footer/Footer"
import AboutUs from './mainAboutUs/AboutUs'
import ChooseUs from './ChooseUs/ChooseUs'
import Process from './Process/Process'



const AboutPage = () => {
  return (
    <>
      <Nav/>
      <AboutUs/>
      <ChooseUs/>
      <Process/>
      <Footer/>
    </>
  )
}

export default AboutPage