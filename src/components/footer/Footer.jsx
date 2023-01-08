import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Back To Top &uarr;
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/adnan-abid-6a7681227/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/AdnanAbidMERN" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto:adnan21abid@gmail.com" target="_blank">
          <MdEmail />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Adnan Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
