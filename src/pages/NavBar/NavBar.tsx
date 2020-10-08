import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <a className="link" onClick={() => scroll.scrollToTop}>
        Home
      </a>
      <span></span>
      <a>
        <Link className="link" to="resume" smooth={true} duration={1000}>
          Resume
        </Link>
      </a>
    </div>
  );
};
export default NavBar;
