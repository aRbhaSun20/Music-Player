import React, { Component } from "react";

import "../Styles/index.css";

import close_icon from "../Images/Icons/close.svg";

import alka from "../Images/Artist/alka.jpg";
import amitabh from "../Images/Artist/amitabh3.jpg";
import arijith from "../Images/Artist/arijith1.jpg";
import darshan from "../Images/Artist/darshan1.jpg";
import dhavni from "../Images/Artist/dhavni1.jpg";
import guru from "../Images/Artist/guru5.jpg";
import kishore from "../Images/Artist/kishore.jpg";
import shreya from "../Images/Artist/shreya.jpg";

class RecentSong extends Component {
	state = {
		albumImages: [
			alka,
			amitabh,
			arijith,
			darshan,
			dhavni,
			guru,
			kishore,
			shreya,
		],
	};

	clickedMe = (name) => {
		let data = [name, this.props.identify];
		this.props.deleteSong(data);
	};

	render() {
		return (
			<div className="recent">
				<div className="trigger-close">
					<img
						onClick={() => this.clickedMe(this.props.Songdata.song_name)}
						className="close-icon"
						src={close_icon}
						alt="close"
					/>
				</div>
				<div className="recent-song">
					<div className="song-detail">
						<img
							src={this.state.albumImages[this.props.Songdata.artist_id - 1]}
							alt="singer"
							className="singer"
						/>
						<div className="detail">
							<div className="name">{this.props.Songdata.artist_name}</div>
							<div className="song-name">{this.props.Songdata.song_name}</div>
							<div className="album-name">{this.props.Songdata.album_name}</div>
							<div className="playlist-name">
								{this.props.Songdata.playlist_name}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RecentSong;
