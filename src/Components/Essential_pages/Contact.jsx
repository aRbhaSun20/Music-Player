import React, { Component } from "react";

import "../Styles/index.css";

import pinPoint from "../Images/Icons/pinpoint.svg";
import mapImg from "../Images/Icons/map.png";
import uploadCloud from "../Images/Icons/upload.svg";
import SearchGoogle from "../Images/Icons/search-google.svg";

class Contact extends Component {
	state = {
		inputs: ["Name", "Email", "Phone", "Message"],
	};
	initialState = ["", "", "", ""];
	handleChange = (evnt) => {
		evnt.preventDefault();
		this.initialState[evnt.target.name] = evnt.target.value;
	};
	handleSubmit = (evnt) => {
		evnt.preventDefault()
		console.log(this.state.data)
	}	
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
								<h1 className="FeedTitle">Feedback form</h1>
								{this.state.inputs.map((item, index) => {
									return (
										<div className="inputs" key={index}>
											{item}
											<div className="form-input">
												<input
													id="inp"
													type="text"
													name={index}
													placeholder={item}
													onChange={this.handleChange}
												/>
											</div>
										</div>
									);
								})}
							</div>
							<div className="inputs-upload">
								<div className="upload-text">
									<img src={uploadCloud} alt="Upload" />
									Upload file
								</div>
								<button onClick={this.handleSubmit} className="feedBackSubmit">Submit </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
