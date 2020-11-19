import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const [navbar, setNavbar]= useState(false);

  const changeBackGround = () => {
    if(window.scrollY >= 300) {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackGround);


  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <div className="link-active home" onClick={() => animateScroll.scrollToTop() } >
        Home
      </div>
      <div>
        <Link className="link resume" to="resume" smooth={true} duration={1000} offset={-80}>
          Resume
        </Link>
      </div>
      <div>
        <Link className="link about" to="about" smooth={true} duration={1000} offset={-80}>
          About
        </Link>
      </div>
      <div>
        <Link className="link contact" to="contact" smooth={true} duration={1000} offset={-80}>
          Contact
        </Link>
      </div>
    </nav>
  );
};




export default NavBar;

