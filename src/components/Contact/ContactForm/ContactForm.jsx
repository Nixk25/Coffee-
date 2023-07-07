import React from "react";
import "./ContactForm.css";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import confirmation from "../../../assets/confirmation.svg";

const ContactForm = () => {
  const fiveAM = dayjs().set("hour", 5).startOf("hour");
  const ninePM = dayjs().set("hour", 20).startOf("hour");
  const tomorrow = dayjs().add(1, "day");

  const hideContactForm = (e) => {
    e.preventDefault();
    document.getElementById("form").style.display = "none";
    document.getElementById("hiddenText").style.display = "flex";
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="container">
        <div id="form">
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
          <form
            className="contact-form"
            onSubmit={hideContactForm}
            method="POST"
          >
            <h3 className="form-text">Please fill in your details</h3>
            <div className="full-name">
              <label htmlFor="fullName">Full Name</label>
              <div className="name">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  name="fullName"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  name="fullName"
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <input
                required
                type="email"
                placeholder="ex:myname@example.com"
                name="email"
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                required
                type="tel"
                placeholder="ex:789909209"
                name="phone"
              />
            </div>
            <div className="guests">
              <label htmlFor="guests">How many of you?</label>
              <input required type="number" defaultValue="" name="guests" />
            </div>
            <hr className="divider" />
            <div className="reservation">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DateTimePicker
                  minTime={fiveAM}
                  maxTime={ninePM}
                  minDate={tomorrow}
                  label="Your date"
                />
              </LocalizationProvider>
            </div>
            <hr className="divider" />
            <div className="type">
              <label htmlFor="type">Reservation Type</label>
              <select required name="type" id="type">
                <option value="Please Select">Please Select</option>
                <option value="Dinner">Dinner</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday/Anniversary">
                  Birthday/Anniversary
                </option>
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
            <hr className="divider" />
            <button className="order-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div id="hiddenText" className="hiddenText">
          <h3>
            Thank you for your <span className="colored">reservation</span>
          </h3>
          <p>We are working on it!</p>
          <img
            className="confirmation"
            src={confirmation}
            alt="confirmation about that everything went well"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
