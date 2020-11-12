import React, { Component } from "react";
import { Link } from "react-router-dom";

import Song from "./Song";

import "../Styles/style3.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import song_playing from "../Images/Icons/Now-Playing-album.svg";
import previous_button from "../Images/Icons/previous-button-now.svg";
import next_button from "../Images/Icons/next-button-now.svg";

import favourite_icon from "../Images/Icons/Favourite.svg";
import thumbs_up_icon from "../Images/Icons/Thumbs-up-now.svg";
import thumbs_down_icon from "../Images/Icons/Thumbs-down-now.svg";
import repeat_icon from "../Images/Icons/repeat-now.svg";
import library_icon from "../Images/Icons/Library-now.svg";
import fullscreen_icon from "../Images/Icons/Fullscreen-now.svg";

class NowPlaying extends Component {
	state = {
		current_playing: {
			song_name: "song_name",
			artist: "Unknown Artist",
			album: "Unknown ALbum",
		},
	};
	Iconslist = [
		favourite_icon,
		thumbs_up_icon,
		thumbs_down_icon,
		repeat_icon,
		library_icon,
		fullscreen_icon,
	];
	IconslistAlt = [
		"favourite_icon",
		"thumbs_up_icon",
		"thumbs_down_icon",
		"repeat_icon",
		"library_icon",
		"fullscreen_icon",
	];
	songslist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];
	render() {
		return (
			<div className="Now-playing">
				<div className="page-section">
					<div className="current-song-playing">
						<div className="playlist-details">
							<div className="album-song-now">
								<img
									className="song-playing-album-now"
									src={song_playing}
									alt="album-now"
								/>
								<div className="song-details-now">
									<div className="song">
										{this.state.current_playing.song_name}
									</div>
									<div className="song-artist">
										{this.state.current_playing.artist}
									</div>
									<div className="song-album">
										{this.state.current_playing.album}
									</div>
								</div>
								<div className="rythm-buttons-now">
									<img
										src={previous_button}
										alt="previous-but"
										className="previous-button"
									/>
									{/* <img src={play_pause_but} className="play_pause-button" /> */}
									<img
										src={next_button}
										alt="next-but"
										className="next-button"
									/>
								</div>
								{/* <div className="song-modified">
									<audio src="./demo.mp3" controls></audio>
								</div> */}
							</div>
						</div>
						<div className="bottom-icons">
							<ul className="bottom-links">
								<div/>
								{this.Iconslist.map((i, index) => {
									return (
										<li key={index}>
											<Link to="/">
												<img
													className="bottom-bar-icons"
													src={this.Iconslist[index]}
													alt={this.IconslistAlt[index]}
												/>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="main-song-lists">
						<div className="song-list">
							{this.props.musicalData.map((Songdata, index) => {
								return (
									<div key={index}>
										<Song Songdata={Songdata} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NowPlaying;
