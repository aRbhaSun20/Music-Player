import React, { Component } from "react";

import "../Styles/index.css";


import close_icon from "../Images/Icons/close.svg";

class Song extends Component {
	clickedMe = (id) => {
		let data = [id, this.props.identify];
		this.props.deleteSong(data);
	};
	render() {
		return (
			<div
				className="song"
				style={{ opacity: `${1 - this.props.index * 0.05}` }}
			>
				<div className="trigger-close">
					<img
						onClick={() => this.clickedMe(this.props.Songdata.song_id)}
						className="close-icon"
						src={close_icon}
						alt="close"
					/>
				</div>

				<div className="song-details">
					<div className="song-name">{this.props.Songdata.song_name}</div>
					<div className="Artist">{this.props.Songdata.artist_name}</div>
					<div className="Album">{this.props.Songdata.album_name}</div>
					<div className="Duration">{this.props.Songdata.album_name}</div>
					<div className="Duration">{this.props.Songdata.duration}</div>
				</div>
			</div>
		);
	}
}

export default Song;
