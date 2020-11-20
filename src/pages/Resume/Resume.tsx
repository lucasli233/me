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

          <div className="resbox">
            <p className="resboxtime">
              
            </p>
            <p className="resboxtitle">
              
            </p>
            <p className="resboxdes">
              <br/>
            </p>
            <p className="resboxentity">
              
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
              Part-time AirBnB host for a New Zealand based property <br/> management company
            </p>
            <p className="resboxentity">
              Toodle Airbnb Management
            </p>
          </div>

          <div className="resbox">
            <div className="resboxtime">
            December 2019 - January 2020
            </div>
            <div className="resboxtitle">
              Software Testing Intern 
            </div>
            <div className="resboxdes">
              Took part in the development of a map labelling software. <br/>
              Key responsibilities: Integration, user interface testing.
            </div>
            <div className="resboxentity">
              Jiangsu Digitaland Technology Co., Ltd.
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
export default Resume;
