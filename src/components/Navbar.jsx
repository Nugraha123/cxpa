import React, { useState } from "react";
import "./Navbar.css";
import logoCxpa from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // tutup menu di mode mobile
  };

  return (
    <nav className="navbar transparent">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logoCxpa} alt="CXPA Logo" className="logo-img" />
        </div>

        {/* Menu Desktop */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a>
          </li>
          <li>
            <a href="#gallery" onClick={(e) => handleScroll(e, "#gallery")}>Gallery</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a>
          </li>
        </ul>

        {/* Tombol Mobile */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
