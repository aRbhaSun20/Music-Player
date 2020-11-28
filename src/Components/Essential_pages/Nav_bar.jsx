import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/style.css";

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
			<div className="nav-bar">
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
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;
