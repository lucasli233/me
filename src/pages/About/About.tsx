import React from "react";
import "./About.scss";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="about-box">
        <div className="photo-box"></div>
        <div className="desc-box">
          <div className="about-title">
            <h1 className="about-title-t1">About </h1>
            <h1 className="about-title-t2">Me</h1>
          </div>
          <div className="about-desc">
            <p className="about-descp1">
              Currently in the last year of pursuing a Bachelor of Science
              degree at the University of Auckland majoring in Computer Science
              and Computational Logic.
            </p>
            <p className="about-descp2">
              I'm very fascinated by technology and science. I'm also passionate
              for psychology, philosophy, cinema, music, and fashion
            </p>
            <div className="about-buttonbox">
              <Link
                className="about-contact-button"
                to="contact"
                smooth={true}
                duration={1000}
                offset={-80}
              >
                HIRE ME
              </Link>

              <a href="../lucasli_cv.pdf" download className="about-cv-button">
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-box">
        <div className="testimonial-title">Testimonials</div>
        <div className="testi-content">
          <div className="testi-left">
            <div className="testi-box">
              <div className="profile-circle">
              </div>
              <div className="chat-bubble">
              </div>
            </div>
          </div>
          <div className="testi-right">
            <div className="testi-box">
              <div className="profile-circle">
              </div>
              <div className="chat-bubble">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
