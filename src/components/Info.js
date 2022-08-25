import React from "react";
import { useState } from "react";
import Photo from "../images/image.jpg";
import {IoMdMail} from 'react-icons/io';
import {SiLinkedin} from 'react-icons/si';
import About from './About'

export default function Info() {

  return (
    <div className="info">
      <img className="img" src={Photo} alt="" />
      <h1 className="name">Laura Smith</h1>
      <h3 className="info--title">Frontend Developer</h3>
      <h4 className="info--website">laurasmith.website</h4>
      <div className="info--buttons">
        <button className="email-btn">
          <IoMdMail />
          <p className="btn-text">Email</p>
        </button>
        <button className="linkedIn-btn">
          <SiLinkedin />
          <p className="btn-text">LinkedIn</p>
        </button>
      </div>
      <About/>
    </div>
  );
}
