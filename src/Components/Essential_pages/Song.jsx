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
					<div className="song-name">{this.props.Songdata.Song.song_name}</div>
					<div className="Artist">{this.props.Songdata.Artist.artist_name}</div>
					<div className="Album">{this.props.Songdata.Album.album_name}</div>
					<div className="Duration">
						{this.props.Songdata.features.duration}
					</div>
				</div>
				{/* <div className="divider-line" /> */}
			</div>
		);
	}
}

export default Song;
