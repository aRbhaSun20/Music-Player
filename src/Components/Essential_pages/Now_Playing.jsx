import React, { Component } from "react";
import { Link } from "react-router-dom";

import Song from "./Song";

import "../Styles/style3.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import song_playing from "../Images/Icons/Now-Playing-album.svg";
import previous_button from "../Images/Icons/previous-button-now.svg";
import next_button from "../Images/Icons/next-button-now.svg";

import favourite_iccon from "../Images/Icons/Favourite.svg";
import thumbs_up_icon from "../Images/Icons/Thumbs-up-now.svg";
import thumbs_down_icon from "../Images/Icons/Thumbs-down-now.svg";
import repeat_icon from "../Images/Icons/repeat-now.svg";
import library_icon from "../Images/Icons/Library-now.svg";
import fullscreen_icon from "../Images/Icons/Fullscreen-now.svg";

class NowPlaying extends Component {
	state = {};
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
									<div className="song">INSECURE</div>
									<div className="song-artist">Unknown Artist</div>
									<div className="song-album">Unknown Album</div>
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
								<div className="song-timeline">
									<audio src="./demo.mp3" controls></audio>
								</div>
							</div>
						</div>
						<div className="bottom-icons">
							<ul className="bottom-links">
								<div className />
								<li>
									<Link to="/">
										<img src={favourite_iccon} alt="Favourite" />
									</Link>
								</li>
								<li>
									<Link to="/">
										<img
											className="bottom-bar-icons"
											src={thumbs_up_icon}
											alt="Thumbs-up"
										/>
									</Link>
								</li>
								<li>
									<Link to="/">
										<img
											className="bottom-bar-icons"
											src={thumbs_down_icon}
											alt="Thumbs-down"
										/>
									</Link>
								</li>
								<li>
									<Link to="/">
										<img
											className="bottom-bar-icons"
											src={repeat_icon}
											alt="Repeat"
										/>
									</Link>
								</li>
								<li>
									<Link to="/">
										<img
											className="bottom-bar-icons"
											src={library_icon}
											alt="Library"
										/>
									</Link>
								</li>
								<li>
									<Link to="/">
										<img
											className="bottom-bar-icons"
											src={fullscreen_icon}
											alt="Fullscreen"
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="main-song-lists">
						<div className="song-list">
							<Song />
							<Song />
							<Song />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NowPlaying;
