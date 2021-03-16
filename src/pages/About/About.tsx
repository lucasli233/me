import React from "react"
import s from "./About.module.scss"
import { Link } from "react-scroll"
import fit1 from "./fit1.jpg"
import juliana from "./juliana.jpg"
import Emoji from "./Emoji"

const About = () => {
  function TestimonialCard(props: any) {
    return (
      <div className={s.testiCard}>
        <img src={props.picture} alt="" className={s.profileCircle} />
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
    )
  }

  return (
    <section id="about" className={s.about}>
      <div className="sectionHeader">ABOUT ME</div>
      <div className="container">
        <img
          src={fit1}
          className={s.fit1}
          alt="guy in black hat and jacket"
        ></img>
        <div className={s.descBox}>
          <span className={s.desc1}>
            Soon to be grad with BSc in CompSci and LogiComp.
            <ul>
              <li>Intellectually curious, tech & science passionate.</li>
              <li>Extremely responsible and meticulous.</li>
              <li>Constantly strive to improve and upskill myself.</li>
            </ul>
          </span>
          <span className={s.desc2}>
            <span>What I like to do in my spare time:</span>

            <ul>
              <li>
                Learning more about technology, science, and philosophy{" "}
                <Emoji symbol="🤓" label="nerdface" />
              </li>

              <li>
                Reading <Emoji symbol="📖" label="book" /> watching a lot of
                critically acclaimed films <Emoji symbol="🎬" label="movie" />
              </li>
              <li>
                Listening to a wide range of music: classical{" "}
                <Emoji symbol="🎻" label="violin" /> rock{" "}
                <Emoji symbol="🎸" label="guitat" />
                techno
                <Emoji symbol="🎧" label="headset" />
              </li>
              <li>
                Watching fashion shows <Emoji symbol="🧥" label="jacket" />{" "}
                looking for new clothes to buy{" "}
                <Emoji symbol="👞" label="shoes" />
              </li>
              <li>
                Working out at the gym{" "}
                <Emoji symbol="🏋️‍♂️" label="weightlifting" />
              </li>
            </ul>
          </span>
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
              href="https://drive.google.com/file/d/1gOYnWV-sSYLtpaTPSHdwmqFxrIFSx247/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
            picture={juliana}
            text="His positive can-do attitude is an asset to any situation. Anyone who is lucky enough to have Lucas as part of their team will have gained a hardworking, conscientious employee."
            name="Juliana Durán, Supervisor "
            company="@Toodle Ltd."
          />
          <span className={s.empty} />
        </div>
      </div>
    </section>
  )
}

export default About
