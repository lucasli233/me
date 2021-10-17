import React, { useState } from "react"
import emailjs from "emailjs-com"
import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faInstagram,
	faFacebook,
	faGithub,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import s from "./Contact.module.scss"

function sendEmail(e: any) {
	e.preventDefault()

	emailjs
		.sendForm("gmail", "temp", e.target, "user_1zZ8PaBX2WHppm5mri95i")
		.then(
			(result) => {
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			}
		)
	e.target.reset()
}

const Contact = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	return (
		<section id="contact" className={s.contact}>
			<div className="sectionHeader"> Get In Touch</div>
			<div className="container">
				<div>
					<div className="secondaryTitle">Email Me</div>
					<form onSubmit={sendEmail}>
						<div className={s.touchBox}>
							<input type="text" placeholder="Your Name" name="name" />
							<input type="email" placeholder="Your Email" name="email" />
							<input type="text" placeholder="Subject" name="subject" />
							<textarea rows={6} placeholder="Write a Message" name="message" />
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

				<div className={s.detailsBox}>
					<div className="secondaryTitle">My Contact Details</div>
					<p className={s.titleEmail}>EMAIL</p>
					<p className={s.content}>sli.lucas233@gmail.com</p>
					<p className={s.title}>PHONE</p>
					<p className={s.content}>+64 022 1977 164</p>
					<p className={s.title}>ADDRESS</p>
					<p className={s.content}>
						12 Martin Square <br />
						Te Aro <br />
						Wellington 6011
					</p>
					<div className={s.social}>
						<a href="https://www.linkedin.com/in/lucaslinz/">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a href="https://github.com/lucasli233/">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href="https://twitter.com/lucasli_nz/">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="https://www.facebook.com/LucasShengqiLi/">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="https://www.instagram.com/lucassli_/">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>
				</div>
			</div>
			<p className={s.copyRight}>© 2021 by Lucas Li</p>
		</section>
	)
}

export default Contact
