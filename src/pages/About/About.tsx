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
            Intellectually curious, tech & science passionate. <br />
            Enjoy solve problem solving, and a self-learner.
          </p>
          <p className={s.desc2}>
            <span>What I like to do in my spare time:</span>

            <ul>
              <li>Learning more about technology, science, and philosophy🤓</li>

              <li>
                Reading📖 and watching a lot of critically acclaimed films🎬
              </li>
              <li>
                Listening to a wide range of music: classical🎻, rock🎸,
                techno🎧
              </li>
              <li>
                Watching fashion shows🧥 and looking for new clothes to buy👞
              </li>
              <li>Working out at the gym🏋️‍♂️</li>
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
              href="https://drive.google.com/file/d/1VZJbqgTXnxGQIm9SRAp4qzjoJWe9_nTb/view?usp=sharing"
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
            text="His assertive attitude is always very helpful in a range of
                    different situations. Anyone who has him in his team can
                    consider very lucky as you can always count on him."
            name="
                    Juliana Durán, Supervisor "
            company="@ Toodle Ltd."
          />
          <div className={s.invis}><TestimonialCard picture="profileCircle"/></div>
        </div>
      </div>
    </section>
  );
};

export default About;
