import React from "react";
import { useState, useEffect } from "react";
import App from "../App";

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-mode", darkMode);
    const footer = document.querySelector(".footerSection");
    footer.classList.toggle("dark-mode", darkMode);
    const bio = document.querySelector(".heading");
    bio.classList.toggle("dark-mode", darkMode);
    const skills = document.querySelector(".heading-list");
    skills.classList.toggle("dark-mode", darkMode);
    const profil = document.querySelector(".profile-heading");
    profil.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="modeSwitch">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={handleToggle}
            checked={darkMode}
          />
          <span className="slider round"></span>
        </label>
        <div className="modeText">{darkMode ? "LIGHT MODE" : "DARK MODE"}</div>
        <div className="modeText">|</div>
        <div className="modeText">
          <span id="lang">TÜRKÇE</span>'YE GEÇ
        </div>
      </div>
    </div>
  );
}
