import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="link home" onClick={() => animateScroll.scrollToTop() } >
        Home
      </div>
      <span></span>
      <div>
        <Link className="link resume" to="resume" smooth={true} duration={1000} offset={-75}>
          Resume
        </Link>
      </div>
      <span></span>
      <div>
        <Link className="link contact" to="contact" smooth={true} duration={1000} offset={-75}>
          Contact
        </Link>
      </div>
    </div>
  );
};


export default NavBar;

