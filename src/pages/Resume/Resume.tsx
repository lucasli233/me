import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-title">
        <h1 className="resume-t1">My</h1>
        <h1 className="resume-t2">Resume</h1>
      </div>
      <div className="resume-content">
        <div className="edu">
          <div className="restext edu">
            Education
          </div>
          <div className="resbox">
            <p className="resboxtime">
              March 2019 - Present
            </p>
            <p className="resboxtitle">
              Bachelor of Science
            </p>
            <p className="resboxdes">
              Majoring in Computer Science and Logic and Computation<br />
              GPA: 7.33
            </p>
            <p className="resboxentity">
              University of Auckland
            </p>
          </div>
          <div className="resbox">
            <p className="resboxtime">
              February 2018 - October 2018
            </p>
            <p className="resboxtitle">
              Bachelor of Engineering with Honours 
            </p>
            <p className="resboxdes">
              Majoring in software engineering. Discontinued after first year.
              <br/>rfcgfgh
            </p>
            <p className="resboxentity">
              Victoria University of Wellington 
            </p>
          </div>
          
        </div>

        <div className="exp">
          <div className="restext exp">
            Experiences
          </div>
          <div className="resbox">
            <p className="resboxtime">
              May 2019 - Present
            </p>
            <p className="resboxtitle">
              Property Management Assistant
            </p>
            <p className="resboxdes">
              Part-time Airbnb host for a New Zealand based property <br/> management company
            </p>
            <p className="resboxentity">
              Toodle Airbnb Management
            </p>
          </div>

          <div className="resbox">
            <p className="resboxtime">
              December 2019 - January 2020
            </p>
            <p className="resboxtitle">
              Software Testing Intern
            </p>
            <p className="resboxdes">
              Took part in the development of a map labelling software. <br/>
              Key responsibilities: Integration, user interface testing.
            </p>
            <p className="resboxentity">
              Jiangsu Digitaland Technology Co., Ltd.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
export default Resume;
