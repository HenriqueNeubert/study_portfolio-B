import React from "react";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import "./Social.scss"

export default props =>{

  return(
    <section className="py-md-5 py-4 barLeft">
      <div className="social d-flex justify-content-end flex-column align-items-center
      h-100 gap-3">
        <a href="">
          <SiLinkedin/>
        </a>
        <a href="">
          <AiOutlineGithub/>          
        </a>
        <a href="">
          <FaDiscord/>          
        </a>
        <a href="">
          <SiGmail/>          
        </a>
      </div>
    </section>
  )
}