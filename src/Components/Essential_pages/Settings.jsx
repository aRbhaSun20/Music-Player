import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import Preferences from "./Preferences";

import "../Styles/index.css";

class Settings extends Component {
	state = {
		show: false,
	};

	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

	theme = false;

	clickedme = () => {
		this.theme = !this.theme;
		this.props.changetheme(this.theme);
	};
	handleLogOut = (evnt) => {
		evnt.preventDefault();
		this.props.handleLogout();
	};
	render() {
		return (
			<div className="settings-menu">
				<div className="first-sections">
					<div className="first-section">
						<div className="heading">ACCOUNT</div>
						<Link to="/signup">
							<div className="texts">Login / SignUp Now</div>
						</Link>

						<div className="texts">Login Account</div>
						<div className="subtext">{this.props.userEmail}</div>
						<div className="texts">Music Directory</div>
						<div className="subtext">/Songs</div>
						<div className="texts">Refresh</div>
					</div>
					<div className="second-section">
						<div className="heading">GENERAL</div>

						<div
							className="texts"
							style={{ cursor: "pointer" }}
							onClick={this.handleShow}
						>
							Improve Your Recommendations
						</div>

						<div className="subtext">choose your language here</div>
						<div className="texts">Sleep Timer</div>
						<div className="subtext">Set your countdown to stop MUSIC</div>
					</div>
					<div className="third-section">
						<div className="heading">PLAYBACK</div>
						<div className="texts">Equiliser</div>
						<div className="subtext">Adjust Audio Settings</div>
						<div className="texts">Show Album Art On Screen</div>
						<div className="texts">Playback Speed</div>
					</div>
				</div>

				<div className="second-sections">
					<div className="first-section">
						<div className="heading">PRIVACY</div>
						<div className="texts">Manage Play Music History</div>
						<div className="subtext">Your Recently played Music</div>
						<div className="texts">Storage Location</div>
						<div className="subtext">Internal</div>
						<div className="texts">Delete Recommendation HIstory</div>
						<div className="texts">Delete My Library</div>
					</div>
					<div className="second-section-below">
						<div className="heading">ABOUT MUSIC</div>
						<div className="texts">Privacy Policy</div>
						<div className="texts">Technologies Used</div>
						<div className="texts">Team Members Responsible</div>
					</div>
					<div className="third-section-below">
						<div className="heading">SELECT THEME MODE</div>
						<div className="slider-holder">
							<label className="switch">
								<input
									defaultChecked
									onClick={this.clickedme}
									type="checkbox"
									id="togBtn"
								/>
								<div className="slider round">
									<span className="on">Light Mode</span>
									<span className="off">Dark Mode</span>
								</div>
								<div className="logoutBut" onClick={this.handleLogOut}>
									LogOut Now
								</div>
							</label>
						</div>
					</div>
				</div>
				<Modal
					show={this.state.show}
					onHide={this.handleClose}
					keyboard={false}
					style={{ background: "transparent" }}
				>
					<Modal.Body>
						<Preferences />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Settings;
