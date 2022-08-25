import React from "react";
import {FaFacebookSquare} from 'react-icons/fa'
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer () {
    return (
      <div className="icons--container">
        <li>
          <BsGithub />
        </li>
        <li>
          <BsInstagram />
        </li>

        <li>
          <BsWhatsapp />
        </li>
        <li>
          <FaFacebookSquare />
        </li>
      </div>
    );
}