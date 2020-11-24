import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGit,
  faFacebook,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function sendEmail(e: any) {
  e.preventDefault();

  emailjs
    .sendForm("gmail", "template", e.target, "user_1zZ8PaBX2WHppm5mri95i")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section id="contact">
      <div className="contact-title">
        <h1 className="contact-t1">Get</h1>
        <h1 className="contact-t2">In Touch</h1>
      </div>
      <div className="resume-content">
        <div className="touch">
          <div className="contacttext touch">Email Me</div>
          <form onSubmit={sendEmail}>
            <div className="touch-box">
              <input
                type="text"
                className="touch-box-form"
                placeholder="Your Name"
                name="name"
              />
              <input
                type="email"
                className="touch-box-form"
                placeholder="Your Email"
                name="email"
              />
              <input
                type="text"
                className="touch-box-form"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="touch-box-form"
                rows={8}
                placeholder="Write a Message"
                name="message"
              />
              <input
                type="submit"
                className="touch-box-form"
                value="SEND MESSAGE"
                onClick={() => setModalIsOpen(true)}
              />
              <Modal
                className="modal submit-modal"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <p>Message sent successfully</p>
                <button
                  className="modal submit-close"
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </button>
              </Modal>
            </div>
          </form>
        </div>

        <div className="details">
          <div className="contacttext details">My Contact Details</div>
          <div className="details-box">
            <p className="details-title email">EMAIL</p>
            <p className="details-content email">sli.lucas233@gmail.com</p>
            <p className="details-title phone">PHONE</p>
            <p className="details-content phone">+64 022 1977 164</p>
            <p className="details-title address">ADDRESS</p>
            <p className="details-content address">
              8B/33 Mount Street <br />
              Auckland CBD <br />
              Auckland 1010
            </p>
            <div className="details-social">
              <a
                href="https://www.linkedin.com/in/lucasli233/"
                className="social linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/lucasli233/"
                className="social github"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a
                href="https://www.facebook.com/LucasShengqiLi/"
                className="social facebook"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
