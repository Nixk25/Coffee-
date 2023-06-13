import React from 'react'
import "./Testimonials.css"
import firstTestimonials from "../../../assets/third.jpg";


const Testimonials = () => {
  return (
    <section class="team">
      <div className="container">
        <h2 class="headline">What they say <span className='colored underlined'>about us?</span></h2>
        <div class="testimonials-container">
          <div class="profile">
            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="man with beautiful hat"/><span class="text">I really love this coffee!</span>
          </div>
          <div class="profile">
            <img src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="woman with the glasses on"/><span class="text">This coffee shop is great!</span>
          </div>
      
          <div class="profile">
            <img src={firstTestimonials} alt="woman with blonde hair"/><span class="text">The coffee menu is just amazing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials