import React from "react";
import "./Resume.scss";

const Resume = () => {
    return (
        <section id="resume">
            <div className="resume-title">
                <h1 className="resume-t1">My </h1>
                <h1 className="resume-t2">Resume</h1>
            </div>
            <div className="resume-content">
                <div className="edu">
                    <div className="restext edu">Education</div>
                    <div className="resbox 1-1">
                        <p className="inresbox time">March 2019 - Present</p>
                        <p className="inresbox title">Bachelor of Science</p>
                        <p className="inresbox des">
                            Majoring in Computer Science and Logic & Computation
                            <br />
                            GPA: 7.33
                        </p>
                        <p className="inresbox entity">
                            University of Auckland
                        </p>
                    </div>

                    <div className="resbox 1-2">
                        <p className="inresbox time">
                            February 2018 - October 2018
                        </p>
                        <p className="inresbox title">
                            Bachelor of Engineering with Honours
                        </p>
                        <p className="inresbox des">
                            Majored in Software Engineering. Moved to Auckland
                            after
                            <br />
                            first year.
                        </p>
                        <p className="inresbox entity">
                            Victoria University of Wellington
                        </p>
                    </div>
                </div>

                <div className="exp">
                    <div className="restext exp">Experiences</div>
                    <div className="resbox 2-1">
                        <p className="inresbox time">May 2019 - Present</p>
                        <p className="inresbox title">
                            Property Management Assistant
                        </p>
                        <p className="inresbox des">
                            Part-time Airbnb host for a New Zealand based
                            property <br /> management company specializing in
                            short term rentals.
                        </p>
                        <p className="inresbox entity">
                            Toodle Airbnb Management
                        </p>
                    </div>

                    <div className="resbox 2-2">
                        <p className="inresbox time">
                            December 2019 - January 2020
                        </p>
                        <p className="inresbox title">
                            Software Testing Intern
                        </p>
                        <p className="inresbox des">
                            Took part in the development of a map labelling
                            software. <br />
                            Key responsibilities: Integration, user interface
                            testing.
                        </p>
                        <p className="inresbox entity">
                            Jiangsu Digitaland Technology Co., Ltd.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Resume;
