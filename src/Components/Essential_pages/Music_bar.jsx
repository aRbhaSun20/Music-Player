import React, { Component } from "react";
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
// import song1 from "../Songs/Asal_Mein.mp3";
// import song2 from "../Songs/Ek_Tarfa.mp3";
// import song3 from "../Songs/Hamdard.mp3";

class MusicBar extends Component {
	state = {
		current_playing: ["Unknown Song", "Unknown Artist"],
		// songsList: ["", song1, demo1, song2, song3, demo],
		songsList: ["", demo1, demo],
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
			"favourite",
			"likes",
			"dislikes",
			"repeat_icon",
			"library_icon",
			"fullscreen_icon",
		],
	};
	InitialState = {
		currentIndex: 0,
	};

	playNext = (evnt) => {
		evnt.preventDefault();
		evnt.persist();
		evnt.target.style.scale = 1.6;
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
		setTimeout(() => {
			if (this.props.changenow) {
				evnt.target.style.scale = 1.3;
			} else {
				evnt.target.style.scale = 1.1;
			}
		}, 400);
	};

	playPrevious = (evnt) => {
		evnt.preventDefault();
		evnt.persist();
		evnt.target.style.scale = 1.6;
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
		setTimeout(() => {
			if (this.props.changenow) {
				evnt.target.style.scale = 1.3;
			} else {
				evnt.target.style.scale = 1.1;
			}
		}, 400);
	};

	handleClick = (evnt) => {
		evnt.preventDefault();
		evnt.persist();
		evnt.target.style.scale = 1.6;
		if (
			evnt.target.id === "favourite" ||
			evnt.target.id === "likes" ||
			evnt.target.id === "dislikes"
		) {
			this.props.changeDetails([evnt.target.id, this.state.index + 1]);
		}

		setTimeout(() => {
			if (this.props.changenow) {
				evnt.target.style.scale = 1.3;
			} else {
				evnt.target.style.scale = 1.1;
			}
		}, 400);
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
						{this.state.Iconslist.map((img, index) => {
							return (
								<div key={index}>
									<img
										ref={(ref) => (this.icon = ref)}
										id={this.state.IconslistAlt[index]}
										className="bottom-bar-icons"
										src={img}
										onClick={this.handleClick}
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
