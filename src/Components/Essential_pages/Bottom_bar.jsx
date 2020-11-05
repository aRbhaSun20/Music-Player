import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import song_playing from "../Images/Icons/Song Playing.svg";
import previous_button from "../Images/Icons/previous-button.svg";

import next_button from "../Images/Icons/next-button.svg";

import favourite_iccon from "../Images/Icons/Favourite.svg";
import thumbs_up_icon from "../Images/Icons/Thumbs-up.svg";
import thumbs_down_icon from "../Images/Icons/Thumbs-down.svg";
import repeat_icon from "../Images/Icons/repeat.svg";
import library_icon from "../Images/Icons/Library.svg";
import fullscreen_icon from "../Images/Icons/Fullscreen.svg";

import demo from "../demo.mp3";

class BottomBar extends Component {
	state = {};
	render() {
		return (
			<div className="bottom-bar fixed-bottom">
				<div className="playlist-details">
					<div className="album-song-bottom">
						<img
							className="song-playing-album"
							src={song_playing}
							alt="song-playing-album"
						/>
						<div className="song-details-bottom">
							<div className="song">INSECURE</div>
							<div className="song-artist">Artist</div>
						</div>

						<div className="rythm-buttons">
							<img
								src={previous_button}
								className="previous-button"
								alt="previous-button"
							/>
							<audio id="player" src={demo} controls></audio>
							<img
								src={next_button}
								className="next-button"
								alt="next-button"
							/>
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
		);
	}
}

export default BottomBar;
