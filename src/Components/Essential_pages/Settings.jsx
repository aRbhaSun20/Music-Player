import React, { Component } from "react";

import "../Styles/style5.css";

class Settings extends Component {
	state = {};
	render() {
		return (
			<div className="settings-menu">
				<div className="first-sections">
					<div className="first-section">
						<div className="heading">ACCOUNT</div>
						<div className="texts">Login Account</div>
						<div className="subtext">bla bla @gmail.com</div>
						<div className="texts">Music Directory</div>
						<div className="subtext">bla bla blasdsafdk</div>
						<div className="texts">Refresh</div>
					</div>
					<div className="second-section">
						<div className="heading">GENERAL</div>
						<div className="texts">Improve Your Recommendations</div>
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
				</div>
			</div>
		);
	}
}

export default Settings;
