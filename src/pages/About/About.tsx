import React from "react";
import s from "./About.module.scss";
import { Link } from "react-scroll";

const About = () => {
  function TestimonialCard(props: any) {
    return (
      <div className={s.testiCard}>
        <div className={props.picture}></div>
        <div className={s.chatBubble}>
          <div className={s.textBox}>
            <p className={s.text}>{props.text}</p>
            <p className={s.name}>
              {props.name}
              <span className={s.company}>{props.company}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className={s.about}>
      <div className="sectionHeader">ABOUT ME</div>
      <div className="container">
        <div className={s.photo}></div>

        <div className={s.descBox}>
          <p className={s.desc1}>
            Soon to be grad with BSc in CompSci and LogiComp.
            <ul>
              <li>I am Intellectually curious, tech & science passionate.</li>
              <li>I am extremely responsible and meticulous.</li>
              <li>I constantly strive to improve and upskill myself.</li>
            </ul>
          </p>
          <p className={s.desc2}>
            <span>What I like to do in my spare time:</span>

            <ul>
              <li>
                Learning more about technology, science, and philosophy 🤓
              </li>

              <li>
                Reading 📖 watching a lot of critically acclaimed films 🎬
              </li>
              <li>
                Listening to a wide range of music: classical 🎻 rock 🎸techno
                🎧
              </li>
              <li>
                Watching fashion shows 🧥 looking for new clothes to buy 👞
              </li>
              <li>Working out at the gym 🏋️‍♂️</li>
            </ul>
          </p>
          <div className={s.btnbox}>
            <Link
              className={s.contactBtn}
              to="contact"
              smooth={true}
              duration={1000}
              offset={-80}
            >
              HIRE ME
            </Link>
            <a
              style={{ display: "table-cell" }}
              href="https://drive.google.com/file/d/1A7LYglM0bFUHmY1TLNogag8a4OP00y3A/view?usp=sharing"
              target="_blank"
              // download
              className={s.cvBtn}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>

      <div className={s.testiBox}>
        <div className="sectionHeader">Testimonials</div>
        <div className={s.testiContainer}>
          <TestimonialCard
            picture="profileCircle juli"
            text="His positive can-do attitude is an asset to any situation. Anyone who is lucky enough to have Lucas as part of their team will have gained a hardworking, conscientious employee."
            name="
                    Juliana Durán, Supervisor "
            company="@Toodle Ltd."
          />
          {/* <div className="invis"><TestimonialCard picture="profileCircle"/></div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
