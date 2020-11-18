import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home_icon from "../Images/Icons/Home.svg";
import search_icon_sm from "../Images/Icons/Search-icon-small.svg";
import arrow_down from "../Images/Icons/Arrow-Down.svg";
import recent_icon from "../Images/Icons/Recent-icon.svg";
import favourite1_icon from "../Images/Icons/Favourite1.svg";
import artist_icon from "../Images/Icons/Artist.svg";
import library2_icon from "../Images/Icons/Library2.svg";

class BottomMainbar extends Component {
	nowPlaying = () => {
		console.log("not clicked");
		this.props.nowPlaying(true);
	};

	clickedme = () => {
		console.log("clickeme");
		this.props.nowPlaying(false);
	};

	render() {
		return (
			<div className="main-menu">
				<div className="main-menu-bottom fixed-bottom">
					<ul className="bottom-main-menu">
						<li>
							<div>
								<img
									src={Home_icon}
									className="bottom-main-menu-icons"
									alt="bottom-main-menu-icons"
								/>
								<Link
									to="/"
									onClick={this.clickedme}
									className="main-menu-list"
								>
									My Music
								</Link>
							</div>
						</li>
						<li>
							<div className="browse-icon-div">
								<img
									src={search_icon_sm}
									className="bottom-main-menu-icons"
									alt="bottom-main-menu-icons"
								/>
								<Link
									to="/browse"
									onClick={this.clickedme}
									className="main-menu-list"
								>
									Browse
								</Link>
							</div>
						</li>
						<li>
							<div className="dropdown">
								<button
									className="btn dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<img
										className="bottom-main-menu-icons"
										alt="bottom-main-menu-icons"
										src={arrow_down}
									/>
								</button>
								<Link
									to="now_playing"
									onClick={this.nowPlaying}
									className="main-menu-list"
								>
									Now Playing
								</Link>
							</div>
						</li>
						<li>
							<div className="dropdown">
								<button
									className="btn dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<img
										className="bottom-main-menu-icons"
										alt="bottom-main-menu-icons"
										src={arrow_down}
									/>
								</button>
								<Link
									to="/now_playing"
									onClick={this.nowPlaying}
									className="main-menu-list paint-red"
								>
									Your Library
								</Link>
								<div
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton"
								>
									<div className="dropdown-item-list-icon" id="dropdown-icon">
										<img src={recent_icon} alt="recent-icon" />
										<Link to="/" className="dropdown-item">
											Recently Played
										</Link>
									</div>
									<div className="dropdown-item-list-icon" id="dropdown-icon">
										<img src={favourite1_icon} alt="favourite-icon" />
										<Link to="/" className="dropdown-item">
											Favourite Songs
										</Link>
									</div>
									<div className="dropdown-item-list-icon" id="dropdown-icon">
										<img src={artist_icon} alt="artist-icon" />
										<Link to="/" className="dropdown-item">
											Artist
										</Link>
									</div>
									<div className="dropdown-item-list-icon" id="dropdown-icon">
										<img src={library2_icon} alt="library-icon" />
										<Link to="/" className="dropdown-item">
											Album
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="dropdown">
								<button
									className="btn dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<img
										className="bottom-main-menu-icons"
										alt="bottom-main-menu-icons"
										src={arrow_down}
									/>
								</button>
								<Link
									to="/"
									onClick={this.clickedme}
									className="main-menu-list paint-red"
								>
									Playlist
								</Link>
								<div
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton"
								>
									<Link to="/" className="dropdown-item">
										Top IndiPop
									</Link>
									<Link to="/" className="dropdown-item">
										Hindi Top
									</Link>
									<Link to="/" className="dropdown-item">
										Pop Songs
									</Link>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default BottomMainbar;
