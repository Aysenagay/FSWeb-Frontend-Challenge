import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="headersection">
      <div className="header">
        <img src="logo.png"></img>
        <div className="nav">
          <Link to="skills" smooth={true} duration={400}>
            Skills
          </Link>
          <Link to="project" smooth={true} duration={400}>
            Projects
          </Link>
          <Link to="footer" smooth={true} duration={400} className="background">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
