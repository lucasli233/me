import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <div className="link" onClick={() => animateScroll.scrollToTop()}>
        HOME
      </div>
      <Link
        className="link"
        to="portfolio"
        smooth={true}
        duration={1000}
        offset={-80}
      >
        PORTFOLIO
      </Link>
      <Link
        className="link"
        to="resume"
        smooth={true}
        duration={1000}
        offset={-80}
      >
        RESUME
      </Link>
      <Link
        className="link"
        to="about"
        smooth={true}
        duration={1000}
        offset={-80}
      >
        ABOUT
      </Link>
      <Link
        className="link"
        to="contact"
        smooth={true}
        duration={1000}
        offset={-80}
      >
        CONTACT
      </Link>
    </nav>
  );
};

export default NavBar;
