import React, { Component } from "react";

import "../Styles/style7.css";

import dharshan from "../Images/final-artist/Darshan.png";
import amitabh from "../Images/final-artist/Amitabh.png";
import arijith from "../Images/final-artist/Arijith.png";
import shreya from "../Images/final-artist/Shreya.png";
import dhavni from "../Images/final-artist/Dhavni.png";

class Preferences extends Component {
	lang = ["English", "Kannada", "Hindi", "Punjabi", "Bengali"];
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
						<div className="language">
							<input type="checkbox" />
							English
						</div>
						<div className="language">
							<input type="checkbox" />
							Kannada
						</div>
						<div className="language">
							<input type="checkbox" />
							Hindi
						</div>
						<div className="language">
							<input type="checkbox" />
							Punjabi
						</div>
						<div className="language">
							<input type="checkbox" />
							Bengali
						</div>
					</div>
				</div>
				<div className="select-language">
					<div className="main-prefer">
						<div className="divider-mini" />
						<div className="select-text">SELECT YOUR MUSIC TASTES</div>
						<div className="divider-mini" />
					</div>
					<div className="languages">
						<div className="language">
							<input type="checkbox" />
							Pop
						</div>
						<div className="language">
							<input type="checkbox" />
							Classical
						</div>
						<div className="language">
							<input type="checkbox" />
							Rock and Disco
						</div>
						<div className="language">
							<input type="checkbox" />
							Orchestra
						</div>
						<div className="language">
							<input type="checkbox" />
							Opera
						</div>
					</div>
				</div>
				<div className="select-language">
					<div className="main-prefer">
						<div className="divider-mini" />
						<div className="select-text">SELECT YOUR ARTISTS</div>
						<div className="divider-mini" />
					</div>
					<div className="artists">
						<div className="artist">
							<div className="artist-detail">
								<input type="checkbox" />
								Darshan Raval
							</div>
							<img src={dharshan} alt="arist-img" />
						</div>
						<div className="artist">
							<div className="artist-detail">
								<input type="checkbox" />
								Arijith Singh
							</div>
							<img src={arijith} alt="arist-img" />
						</div>
						<div className="artist">
							<div className="artist-detail">
								<input type="checkbox" />
								Amitabh Bachchan
							</div>
							<img src={amitabh} alt="arist-img" />
						</div>
						<div className="artist">
							<div className="artist-detail">
								<input type="checkbox" />
								Shreya Ghosal
							</div>
							<img src={shreya} alt="arist-img" />
						</div>
						<div className="artist">
							<div className="artist-detail">
								<input type="checkbox" />
								Dhavni Bhanusali
							</div>
							<img src={dhavni} alt="arist-img" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Preferences;
