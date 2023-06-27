import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <div className="form-texts">
        <div className="form-headline">
          <h1>Get in touch</h1>
        </div>
        <div className="form-desc">
          <p>
            Make a reservation <span className="colored">for you</span> and{" "}
            <span className="colored">your friends</span>!
          </p>
          <p>We are waiting for you!</p>
        </div>
      </div>
      <form className="contact-form" action="" method="POST">
        <h3 className="form-text">Please fill in your details</h3>
        <div className="full-name">
          <label htmlFor="fullName">Full Name</label>
          <div className="name">
            <input type="text" placeholder="First Name" name="fullName" />
            <input type="text" placeholder="Last Name" name="fullName" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="ex:myname@example.com"
            name="email"
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="ex:789 909 209" name="phone" />
        </div>
        <div className="guests">
          <label htmlFor="guests">How many of you?</label>
          <input type="number" defaultValue="" name="guests" />
        </div>
        <hr />
        <div className="reservation"></div>
        <hr />
        <div className="type">
          <label htmlFor="type">Reservation Type</label>
          <select name="type" id="type">
            <option value="Please Select">Please Select</option>
            <option value="Dinner">Dinner</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday/Anniversary">Birthday/Anniversary</option>
            <option value="Nightlife">Nightlife</option>
            <option value="Private">Private</option>
            <option value="Holiday">Holiday</option>
            <option value="Corporate">Corporate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="requests">
          <label htmlFor="requests">Any special requests</label>
          <textarea name="requests" cols="50" rows="3"></textarea>
        </div>
        <hr />
        <button className="order-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
