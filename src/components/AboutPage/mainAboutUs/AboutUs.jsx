import React from 'react';
import "./AboutUs.css";
import bgAbout from "../../../assets/background-about.jpg"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-headline__wrapper">
          <h1 className='headline-about'>About us</h1>
          <p className='desc'>Something about our <span className='colored underlined'>Coffee shop</span></p>
        </div>
        <div className="main-about__section">
          <div className="about-image">
            <img src={bgAbout} alt="background of my coffee shop" />
          </div>
          <div className="right-side">
            <div className="main-texts">
              <p className='first-text__about'>
                Our coffee shop is more than just a place to grab a <span className='colored'>quick cup of coffee</span>. It's a <span className="colored">community hub</span> where people come to <span className="colored">connect</span>, <span className='colored'>connect</span>, and <span className='colored'>enjoy</span> the <span className="colored">best coffee</span> in town. Our baristas are passionate about their craft and take pride in creating unique and delicious drinks that cater to every taste.
              </p>
            <br />
            <br />
              <p className='second-text__about'>
                We source our coffee beans from the <span className="colored">finest growers</span> around the world, ensuring that every cup is <span className="colored">rich</span>, <span className="colored">flavorful</span>, and <span className="colored">satisfying</span>. Our menu features a wide range of options, from classic espresso drinks to creative specialty beverages that are sure to <span className="colored">delight your taste buds</span>.
              </p>
            </div>
            <div className="about-btn__wrapper">
              <Link className="order-btn__link" to="/Contact"><button className="order-btn">Get in touch</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs