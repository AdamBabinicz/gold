import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="lower__footer">
      <span>2022 - {new Date().getFullYear()}. Radom</span>
      <ul>
        <li>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
