import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adnan-abid-6a7681227/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/AdnanAbidMERN" target="_blank">
        <FaGithub />
      </a>

      {/* <a
        href="dribble"
        target="_blank"
      >
        <FaGithub />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
