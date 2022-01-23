import React, { useState } from "react";
import "./styles/Header.css";
// import img from "../assets/2.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiGoldBar } from "react-icons/gi";

const Header = () => {
  const [active, setActive] = useState(false);
  const showUl = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header__logo">
        {/* <img src={img} alt="..." /> */}
        <GiGoldBar />
      </div>
      <div className="menu__icon">
        <AiOutlineMenu className="menu" onClick={showUl} />
      </div>
      <nav>
        <ul className={active ? "list__items active" : "list__items"}>
          <div className="close__icon">
            <AiOutlineClose className="close" onClick={showUl} />
          </div>
          <li>
            <a href="#">Start</a>
          </li>
          <li>
            <a href="#historia">Historia</a>
          </li>
          <li>
            <a href="#o-złocie">O&nbsp;złocie</a>
          </li>
          <li>
            <a href="kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
