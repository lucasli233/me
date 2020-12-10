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
              Third year Bachelor of Science student at the University of
              Auckland.
            </p>
            <p className="about-descp2">
              Passionate for technology, science, and philosophy. Hobbies and
              interests include cinema, classical music, and fashion.
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
              <a
                style={{ display: "table-cell" }}
                href="https://drive.google.com/file/d/1VZJbqgTXnxGQIm9SRAp4qzjoJWe9_nTb/view?usp=sharing"
                target="_blank"
                // download
                className="about-cv-button"
              >
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
              <div className="profile-circle juli"></div>
              <div className="chat-bubble">
                <div className="testi-texts-box">
                  <p className="testi-text">
                    "His assertive attitude is always very helpful in a range of
                    different situations. Anyone who has him in his team can
                    consider very lucky as you can always count on him."
                  </p>
                  <p className="testi-text-entity juli">
                    Juliana Durán, Supervisor
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testi-right">
            <div className="testi-box">
              <div className="profile-circle nicci"></div>
              <div className="chat-bubble nicci">
                <div className="testi-texts-box">
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
