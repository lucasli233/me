import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
import "./NavBar.scss";

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const [] = useState(false);

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
            <div
                className="link home"
                onClick={() => animateScroll.scrollToTop()}
            >
                HOME
            </div>
            <Link
                className="link resume"
                to="resume"
                smooth={true}
                duration={1000}
                offset={-80}
            >
                RESUME
            </Link>
            <Link
                className="link about"
                to="about"
                smooth={true}
                duration={1000}
                offset={-80}
            >
                ABOUT
            </Link>
            <Link
                className="link contact"
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
