//import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";


export default function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/sheila-kobue-82161973/"
        target="blank"
      >
        <FaLinkedin />
      </a>

      <a href="https://github.com/sheilakobue" target="blank">
        <FaGithub />
      </a>

      <a href="https://www.facebook.com/maserole.mojela" target="blank">
        <FaFacebook />
      </a>
    </div>
  );
}
