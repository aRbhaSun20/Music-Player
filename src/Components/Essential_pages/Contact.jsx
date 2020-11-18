import React, { Component } from "react";

import "../Styles/style6.css";

import pinPoint from "../Images/Icons/pinpoint.svg";
import mapImg from "../Images/Icons/map.png";
import uploadCloud from "../Images/Icons/upload.svg";
import SubmitButton from "../Images/Icons/submit.svg";
import SearchGoogle from "../Images/Icons/search-google.svg";

class Contact extends Component {
	render() {
		return (
			<div className="Contactc-Page">
				<div className="main">
					<div className="top-contact">
						<div className="map">
							<img
								className="search-google"
								src={SearchGoogle}
								alt="Search-bar"
							/>
							<img className="pinpoint" src={pinPoint} alt="pinPoint" />
							<div className="contact-text-map">Contact Us</div>
							<img className="mapimg" src={mapImg} alt="Map" />
						</div>
						<div className="contact-form">
							<div className="text-contact">
								<h className="FeedTitle">Feedback form</h>
								<div className="inputs">
									<input id="inp" type="text" name="Name" placeholder="Name" />
								</div>
								<div className="inputs">
									<input
										id="inp"
										type="text"
										name="Email"
										placeholder="E-mail"
									/>
								</div>
								<div className="inputs">
									<input
										id="inp"
										type="text"
										name="Phone"
										placeholder="Phone"
									/>
								</div>
								<div className="inputs">
									<input
										id="inp"
										type="text"
										name="Message"
										placeholder="Message"
									/>
								</div>
							</div>
							<div className="inputs-upload">
								<div className="upload-text">
									<img src={uploadCloud} alt="Upload" />
									Upload file
								</div>
								<img id="submitbtn" src={SubmitButton} alt="Submit" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
