import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import s from "./Contact.module.scss";

function sendEmail(e: any) {
  e.preventDefault();

  emailjs
    .sendForm("gmail", "temp", e.target, "user_1zZ8PaBX2WHppm5mri95i")
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
    <section id="contact" className={s.contact}>
      <div className="sectionHeader"> Get  In  Touch</div>
      <div className="container">
        <div className={s.touch}>
          <div className="secondaryTitle">Email Me</div>
          <form onSubmit={sendEmail}>
            <div className={s.touchBox}>
              <input type="text" placeholder="Your Name" name="name" />
              <input type="email" placeholder="Your Email" name="email" />
              <input type="text" placeholder="Subject" name="subject" />
              <textarea rows={5} placeholder="Write a Message" name="message" />
              <input
                type="submit"
                value="SEND MESSAGE"
                onClick={() => setModalIsOpen(true)}
              />
              <Modal
                className={s.submitModal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <p>Message sent successfully</p>
                <button
                  className={s.submitClose}
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </button>
              </Modal>
            </div>
          </form>
        </div>

        <div className="details">
          <div className="secondaryTitle">My Contact Details</div>
          <div className={s.detailsBox}>
            <p className={s.title}>EMAIL</p>
            <p className={s.content}>sli.lucas233@gmail.com</p>
            <p className={s.title}>PHONE</p>
            <p className={s.content}>+64 022 1977 164</p>
            <p className={s.title}>ADDRESS</p>
            <p className={s.content}>
              8B/33 Mount Street <br />
              Auckland CBD <br />
              Auckland 1010
            </p>
            <div className={s.social}>
              <a href="https://www.linkedin.com/in/lucasli233/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/lucasli233/">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a href="https://www.facebook.com/LucasShengqiLi/">
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
