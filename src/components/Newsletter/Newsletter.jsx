import React from 'react'
import "./Newsletter.css"


const Newsletter = () => {

  function disappearFunction(){
    document.getElementById("new-element").style.display="block";
    document.getElementById("bg-image__newsletter").style.display="none";
  }
  return (
    <section className='newsletter'>
      <div className="container">
        <div id="bg-image__newsletter">
            <div id="newsletter-wrapper">
                <div className="newsletter-text">Subscribe to get <span className='colored'>50%</span> discount price</div>
                <div className="input-wrapper">
                  <input className='newsletter-input' type="email" id='email' placeholder='Email Address'/>
                  <button className='newsletter-btn' onClick={disappearFunction}>Order now</button>
                </div>
          </div>
        </div>
          <div id="new-element">
            <p>Thanks for subscription! 😁</p>
          </div>
      </div>
    </section>
  )
}

export default Newsletter