import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="headerContainer">
        <img src="logo.png"></img>
        <div className="nav">
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a className="background" href="#">
            <p>Hire me</p>
          </a>
        </div>
      </div>
    </div>
  );
}
