import React, { Component } from "react";

import "../Styles/index.css";

import dharshan from "../Images/Artist/darshan1.jpg";
import amitabh from "../Images/Artist/amitabh3.jpg";
import arijith from "../Images/Artist/arijith1.jpg";
import shreya from "../Images/Artist/shreya.jpg";
import dhavni from "../Images/Artist/dhavni1.jpg";

class Preferences extends Component {
	state = {
		lang: ["English", "Kannada", "Hindi", "Punjabi", "Bengali"],
		musicTypes: ["Pop", "Classical", "Rock", "Orchestra", "Opera"],
		artist: [dharshan, arijith, amitabh, shreya, dhavni],
		artistName: [
			"Darshan Raval",
			"Arijith Singh",
			"Amitabh Bachchan",
			"Shreya Ghosal",
			"Dhavni Bhanusali",
		],
	};

	render() {
		return (
			<div className="prefer">
				<div className="heading">
					<div className="main-heading">SELECT YOUR PREFERENCES</div>
					<div className="sub-heading">
						Over 100 songs to suit every emotion and occasion
					</div>
				</div>
				<div className="select-language">
					<div className="main-prefer">
						<div className="divider-mini" />
						<div className="select-text">SELECT YOUR LANGUAGES</div>
						<div className="divider-mini" />
					</div>
					<div className="languages">
						{this.state.lang.map((item, index) => {
							return (
								<div className="language" key={index}>
									<input type="checkbox" />
									{item}
								</div>
							);
						})}
					</div>
				</div>
				<div className="select-language">
					<div className="main-prefer">
						<div className="divider-mini" />
						<div className="select-text">SELECT YOUR MUSIC TASTES</div>
						<div className="divider-mini" />
					</div>
					<div className="languages">
						{this.state.musicTypes.map((item, index) => {
							return (
								<div className="language" key={index}>
									<input type="checkbox" />
									{item}
								</div>
							);
						})}
					</div>
				</div>
				<div className="select-language">
					<div className="main-prefer">
						<div className="divider-mini" />
						<div className="select-text">SELECT YOUR ARTISTS</div>
						<div className="divider-mini" />
					</div>
					<div className="artists">
						{this.state.artist.map((item, index) => {
							return (
								<div className="artist" key={index}>
									<div className="artist-detail">
										<input type="checkbox" />
										{this.state.artistName[index]}
									</div>
									<img src={item} alt="arist-img" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Preferences;
