import React, { Component } from "react";

import "../Styles/index.css";

import Toast from "react-bootstrap/Toast";

import pinPoint from "../Images/Icons/pinpoint.svg";
import mapImg from "../Images/Icons/map.png";
import uploadCloud from "../Images/Icons/upload.svg";
import SearchGoogle from "../Images/Icons/search-google.svg";

class Contact extends Component {
	state = {
		popShow: false,
		inputs: ["Name", "Email", "Phone", "Message"],
	};
	initialState = ["", "", "", ""];
	handleChange = (evnt) => {
		evnt.preventDefault();
		this.initialState[Number(evnt.target.name)] = evnt.target.value;
	};
	handleSubmit = (evnt) => {
		evnt.preventDefault();
		this.props.handleFeedback(this.initialState);
		this.setState({ popShow: true });
	};

	handlePopClose = (evnt) => {
		this.setState({ popShow: false });
	};
	render() {
		return (
			<div className="Contactc-Page">
				<div className="main">
					<Toast
						className="popupMesage"
						onClose={this.handlePopClose}
						show={this.state.popShow}
						delay={3000}
						autohide
					>
						<Toast.Header>
							<strong className="mr-auto">FeedBack Status</strong>
						</Toast.Header>
						<Toast.Body>
							Thanks {this.initialState[0]} for kind feedback the developers
							will be notified
						</Toast.Body>
					</Toast>

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
								<button onClick={this.handleSubmit} className="feedBackSubmit">
									Submit{" "}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
