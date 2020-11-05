import React, { Component } from "react";

import "../Styles/style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import close_icon from "../Images/Icons/close.svg";

class Song extends Component {
	render() {
		return (
			<div className="song">
				<div className="song-details">
					<img className="close-icon" src={close_icon} alt="close" />
					<div className="song-name">Song Name</div>
					<div className="Artist">Artist</div>
					<div className="Album">Album</div>
					<div className="Duration">05:00</div>
				</div>
				<div className="divider-line" />
			</div>
		);
	}
}

export default Song;
