import React, { Component } from "react";

import "../Styles/style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import close_icon from "../Images/Icons/close.svg";

class Song extends Component {
	render() {
		return (
			<div className="song">
				<div
					className="song-details"
					style={{ opacity: `${1 - this.props.index * 0.05}` }}
				>
					<img className="close-icon" src={close_icon} alt="close" />
					<div className="song-name">{this.props.Songdata.song_name}</div>
					<div className="Artist">{this.props.Songdata.artist_name}</div>
					<div className="Album">{this.props.Songdata.album_name}</div>
					<div className="Duration">
						{this.props.Songdata.duration}
					</div>
				</div>
			</div>
		);
	}
}

export default Song;
