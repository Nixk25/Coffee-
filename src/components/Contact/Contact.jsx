import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import ContactForm from "./ContactForm/ContactForm";
import Menu from "../Menu/Menu";

const Contact = () => {
  return (
    <div>
      <Nav />
      <Menu />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
