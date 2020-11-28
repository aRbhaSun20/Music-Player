import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/index.css";
import Search_Icon from "../Images/Icons/Search-Icon.svg";

class NavBar extends Component {
	state = {};

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
			<div className="nav-section">
				<nav className="nav-bar fixed-top">
					<div className="title">
						<h2>Oscillations</h2>
					</div>
					<ul className="nav-links">
						<li>
							<Link to="/" onClick={this.clickedme} className="main-menu-list">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="now_playing"
								onClick={this.nowPlaying}
								className="main-menu-list"
							>
								Now Playing
							</Link>
						</li>
						<li>
							<Link
								to="now_playing"
								onClick={this.nowPlaying}
								className="main-menu-list"
							>
								Recently Played
							</Link>
						</li>
						<li>
							<div
								className="premium"
								data-toggle="modal"
								data-target="#sharebar"
								id="contact-icon"
							>
								Get premium Subscription
							</div>
						</li>
						<li>
							<Link to="settings" className="main-menu-list">
								Settings
							</Link>
						</li>
						<li>
							<Link to="signup" className="main-menu-list">
								Sign Up / Login
							</Link>
						</li>
						<li>
							<Link to="browse" className="main-menu-list">
								<div className="search-songs">
									<div className="search-bar">
									<input
										type="text"
										placeholder="Search for Songs, Artist and More"
									/>
									<div className="Search-icon-text">
										<img
											src={Search_Icon}
											alt="search-icon"
											className="Search-icon"
										/>
										<div className="text">Search</div>
									</div>
								</div>
								</div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;
