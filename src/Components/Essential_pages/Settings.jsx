import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";

import Preferences from "./Preferences";

import "../Styles/index.css";

class Settings extends Component {
	state = {
		show: false,
		popShow: false,
		prefer: false,
	};

	handlePreferClose = () => this.setState({ prefer: false });
	handlePreferShow = () => this.setState({ prefer: true });
	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

	theme = false;

	clickedme = () => {
		this.theme = !this.theme;
		this.props.changetheme(this.theme);
	};

	handlePopClose = (evnt) => {
		this.setState({ popShow: false });
	};

	handleToggle = (evnt) => {
		// evnt.preventDefault();
		this.setState({ popShow: true });
	};

	handleLogOut = (evnt) => {
		// evnt.preventDefault();
		this.props.handleLogout();
		this.handleToggle();
	};
	render() {
		return (
			<div className="settings-menu">
				<Toast
					className="popupMesage"
					onClose={this.handlePopClose}
					show={this.state.popShow}
					delay={2000}
					autohide
				>
					<Toast.Header>
						<strong className="mr-auto">LogOut Status</strong>
						<small>User with Email {this.props.userEmail} has Logged Out</small>
					</Toast.Header>
					<Toast.Body>See you Soon {this.props.userName}!! Bro!!!</Toast.Body>
				</Toast>
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
							onClick={this.handlePreferShow}
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
						<Link to="/lastPlayed">
							<div className="texts">Last Played Songs</div>
						</Link>
						<div className="texts">Delete My Library</div>
					</div>
					<div className="second-section-below">
						<div className="heading">ABOUT MUSIC</div>
						<Link to="/privacy">
							<div className="texts">Privacy Policy</div>
						</Link>
						<Link to="/userdetails">
							<div className="texts">User Details</div>
						</Link>
						<div className="texts">Technologies Used</div>
						<Link to="/visualize">
							<div className="texts">Data Visualization</div>
						</Link>
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
							</label>
							<div className="logoutBut" onClick={this.handleLogOut}>
								LogOut Now
							</div>
						</div>
					</div>
				</div>
				<Modal
					show={this.state.prefer}
					onHide={this.handlePreferClose}
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
