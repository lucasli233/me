import React from "react";
import "./About.scss";
// import styles from "./About.module.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="aboutBox">
        <div className="photoBox"></div>
        <div className="descBox">
          <div className="aboutTitle">
            <h1 className="aboutTitleT1">About </h1>
            <h1 className="aboutTitleT2">Me</h1>
          </div>
          <div className="aboutDesc">
            <p className="aboutDescp">
              Third year Bachelor of Science student at the University of
              Auckland.
            </p>
            <p className="aboutDescp">
              I am an outgoing and sociable person. I am super passionate for
              technology, science. My hobbies and interests range from
              philosophy and cinema, to classical music and fashion.
            </p>

            <div className="aboutButtonbox">
              <Link
                className="aboutContactButton"
                to="contact"
                smooth={true}
                duration={1000}
                offset={-80}
              >
                HIRE ME
              </Link>
              <a
                style={{ display: "table-cell" }}
                href="https://drive.google.com/file/d/1VZJbqgTXnxGQIm9SRAp4qzjoJWe9_nTb/view?usp=sharing"
                target="_blank"
                // download
                className="aboutCvButton"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonialBox">
        <div className="testimonialTitle">Testimonials</div>
        <div className="testiContent">
          <div className="testiLeft">
            <div className="testiBox">
              <div className="profileCircle juli"></div>
              <div className="chatBubble">
                <div className="testiTextsBox">
                  <p className="testiText">
                    "His assertive attitude is always very helpful in a range of
                    different situations. Anyone who has him in his team can
                    consider very lucky as you can always count on him."
                  </p>
                  <p className="testiTextEntity juli">
                    Juliana Durán, Supervisor
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testiRight">
            <div className="testiBox">
              <div className="profileCircle nicci"></div>
              <div className="chatBubble nicci">
                <div className="testiTextsBox">
                  {/* <p className="testi-text">Xxxx</p>
                  <p className="testi-text-entity nicci">Xxxx Xxxxx, Xxxx</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
