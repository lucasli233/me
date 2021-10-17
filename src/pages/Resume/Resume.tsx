import React from "react"
import s from "./Resume.module.scss"

const Resume = () => {
	function ResumeCard(props: any) {
		return (
			<div className={s.resbox}>
				<p className={s.date}>{props.date}</p>
				<p className={s.title}>{props.title}</p>
				<p className={s.des}>
					{props.des}
					<br />
					{props.gpa}
				</p>
				<p className={s.entity}>{props.entity}</p>
			</div>
		)
	}

	return (
		<section id="resume" className={s.resume}>
			<div className="sectionHeader">Resume</div>
			<div className="container">
				<div className={s.edu}>
					<div className="secondaryTitle">Education</div>

					<ResumeCard
						date="March 2019 - Present"
						title="Bachelor of Science"
						des="Major in Computer Science, Logic and Computation."
						gpa="7/9"
						entity="University of Auckland"
					/>

					<ResumeCard
						date="February 2018 - October 2018"
						title="Bachelor of Engineering with Honours"
						des="Major in Software Engineering. Discontinued and moved to
            Auckland after first year."
						entity="Victoria University of Wellington"
					/>
				</div>

				<div className={s.exp}>
					<div className="secondaryTitle">Experience</div>
					{/* <ResumeCard
						date="??? 2021 - Present"
						title="Technology Consultant"
						des="Full-time graduate role"
						entity="Ernst & Young Global Limited"
					/> */}
					<ResumeCard
						date="May 2019 - Jun 2021"
						title="Property Management Assistant"
						des="Part-time Airbnb host for a New Zealand based property management
            company specializing in short term rentals."
						entity="Toodle Airbnb Management"
					/>

					<ResumeCard
						date="Jan 2020 - Feb 2020"
						title="Software Testing Intern"
						des="Took part in the development of a map labelling software.
            Key responsibilities: Integration, user interface testing."
						entity="Jiangsu Digitaland Technology Co., Ltd."
					/>
				</div>
			</div>
		</section>
	)
}
export default Resume
