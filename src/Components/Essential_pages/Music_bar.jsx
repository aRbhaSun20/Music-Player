import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "../Styles/index.css";

import song_playing from "../Images/Icons/Song Playing.svg";
import previous_button from "../Images/Icons/previous-button-now.svg";
import next_button from "../Images/Icons/next-button-now.svg";
import favourite_icon from "../Images/Icons/Favourite.svg";
import thumbs_up_icon from "../Images/Icons/Thumbs-up-now.svg";
import thumbs_down_icon from "../Images/Icons/Thumbs-down-now.svg";
import repeat_icon from "../Images/Icons/repeat-now.svg";
import library_icon from "../Images/Icons/Library-now.svg";
import fullscreen_icon from "../Images/Icons/Fullscreen-now.svg";

import demo from "../Songs/demo.mp3";
import demo1 from "../Songs/demo2.mp3";

class MusicBar extends Component {
	state = {
		current_playing: ["Unknown Song", "Unknown Artist"],
		songsList: ["", demo, demo1],
		index: 0,
		Iconslist: [
			favourite_icon,
			thumbs_up_icon,
			thumbs_down_icon,
			repeat_icon,
			library_icon,
			fullscreen_icon,
		],
		IconslistAlt: [
			"favourite_icon",
			"thumbs_up_icon",
			"thumbs_down_icon",
			"repeat_icon",
			"library_icon",
			"fullscreen_icon",
		],
	};

	async getAudio() {
		let response = await fetch("../Songs/demo2.mp3");
		let url = await response.url;
		this.setState({ current_song: url });
		this.player.src = url;
		document.getElementById("music").src = url;
		console.log(url);
	}

	InitialState = {
		currentIndex: 0,
	};

	playNext = () => {
		this.player.src = demo1;
		if (this.InitialState.currentIndex < this.props.listLength) {
			this.setState({
				current_playing: this.props.currentMusic(
					this.InitialState.currentIndex
				),
				index: this.InitialState.currentIndex,
			});
			this.InitialState.currentIndex += 1;
		}
	};

	playPrevious = () => {
		if (this.InitialState.currentIndex > 0) {
			this.setState({
				current_playing: this.props.currentMusic(
					this.InitialState.currentIndex - 1
				),
				index: this.InitialState.currentIndex,
			});
			this.InitialState.currentIndex -= 1;
		} else {
			this.InitialState.currentIndex = 0;
		}
	};

	render() {
		return (
			<div className="music-bar">
				<div
					className={`bottom-bar ${
						this.props.changenow ? "modified " : " fixed-bottom"
					}`}
				>
					<div className="playlist-details">
						<div className="album-song-bottom">
							<img
								onClick={this.Current_playing}
								className="song-playing-album"
								src={song_playing}
								alt="song-playing-album"
							/>
							<div className="song-details-bottom">
								<div className="song-name">{this.state.current_playing[0]}</div>
								<div className="song-artist">
									{this.state.current_playing[1]}
								</div>
							</div>

							<div className="rythm-buttons">
								<img
									src={previous_button}
									className="previous-button"
									alt="previous-button"
									onClick={this.playPrevious}
								/>
								<div className={`songunmodified`}>
									<audio
										className="current-song"
										controls
										src={this.state.songsList[this.state.index]}
										ref={(ref) => (this.player = ref)}
										id="music"
									></audio>
								</div>

								<img
									src={next_button}
									className="next-button"
									alt="next-button"
									onClick={this.playNext}
								/>
							</div>
						</div>
					</div>
					<div className="bottom-icons">
						{this.state.Iconslist.map((i, index) => {
							return (
								<div key={index}>
									<img
										className="bottom-bar-icons"
										src={this.state.Iconslist[index]}
										alt={this.state.IconslistAlt[index]}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default MusicBar;
