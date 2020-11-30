import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Share from "./Share";
import Modal from "react-bootstrap/Modal";

import "../Styles/index.css";
import Search_Icon from "../Images/Icons/Search-Icon.svg";

class NavBar extends Component {
	state = {
		show: false,
	};

	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

	nowPlaying = () => {
		this.props.nowPlaying(true);
	};

	clickedme = () => {
		this.props.nowPlaying(false);
	};

	handleSearch = (evnt) => {
		evnt.preventDefault();
		if (evnt.target.value) {
			this.props.handleSearch(evnt.target.value);
		}
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
							<NavLink
								activeClassName="activeLink"
								to="/"
								exact
								onClick={this.clickedme}
								className="main-menu-list"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName="activeLink"
								to="now_playing"
								exact
								onClick={this.nowPlaying}
								className="main-menu-list"
							>
								Now Playing
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName="activeLink"
								to="recent_playing"
								exact
								onClick={this.nowPlaying}
								className="main-menu-list"
							>
								Recently Played
							</NavLink>
						</li>
						<li>
							<div className="premium" onClick={this.handleShow}>
								Get premium Subscription
							</div>
						</li>
						<li>
							<NavLink
								activeClassName="activeLink"
								to="settings"
								exact
								onClick={this.clickedme}
								className="main-menu-list"
							>
								Settings
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName="activeLink"
								to="signup"
								exact
								onClick={this.clickedme}
								className="main-menu-list"
							>
								Sign Up / Login
							</NavLink>
						</li>
						<li>
							<NavLink to="browse" className="main-menu-list">
								<div className="search-songs">
									<div className="search-bar">
										<input
											type="text"
											placeholder="Search for Songs, Artist and More"
											onChange={this.handleSearch}
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
							</NavLink>
						</li>
					</ul>
				</nav>
				<Modal
					show={this.state.show}
					onHide={this.handleClose}
					keyboard={false}
					style={{ background: "transparent" }}
				>
					<Modal.Body>
						<Share />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default NavBar;
