import React from "react";
import "./styles/Contact.css";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import img from "../assets/4.png";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Link to="/" className="a-icon">
          <BsArrowLeftSquareFill className="icon" />
        </Link>
        <div className="input__container">
          <img src={img} alt="..." />
          <p>
            <HiOutlineMail />
            &nbsp;
            <a href="mailto:puaro@vp.pl">puaro@vp.pl</a>
          </p>
          {/* <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Wiadomość" />
        <button>Wyślij</button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
