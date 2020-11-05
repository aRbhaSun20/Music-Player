import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/style.css";

import Burger from "../Images/Icons/Burger.svg";
import Search_Icon from "../Images/Icons/Search-Icon.svg";
import Shop_icon from "../Images/Icons/Shop.svg";
import Settings_Icon from "../Images/Icons/settings.svg";
import share_Icon from "../Images/Icons/share.svg";
import google_icon from "../Images/Icons/google-icon.svg";
import facebook_icon from "../Images/Icons/facebook-icon.svg";
import gmail_icon from "../Images/Icons/gmail-icon.svg";
import contact_icon from "../Images/Icons/contact.svg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<div className="nav-bar">
				<nav className="nav-bar navbar-light fixed-top">
					<div className="title">
						<Link to="/">
							<img src={Burger} alt="Burger" />
						</Link>
						<h2>Music</h2>
					</div>
					<Link to="/browse">
						<div className="search-bar">
							<img
								src={Search_Icon}
								alt="search-icon"
								className="Search-icon"
							/>
							<input type="text" placeholder="Search for songs, artist, etc." />
						</div>
					</Link>

					<ul className="nav-links">
						<li>
							<Link to="/">
								<img className="nav-icons" src={Shop_icon} alt="Shop" />
							</Link>
						</li>
						<li>
							<Link to="/settings">
								<img src={Settings_Icon} alt="Settings" onclick />
							</Link>
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
									<Link to="/" className="main-menu-list">
										<img className="nav-icons" src={share_Icon} alt="Share" />
									</Link>
								</button>
								<Link to="/" className="main-menu-list"></Link>
								<div
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton"
									id="share-drop-menu"
								>
									<div
										className="dropdown-item-list-icon"
										id="dropdown-icon-share"
									>
										<Link to="/" className="dropdown-item">
											<img src={google_icon} alt="google-icon" />
										</Link>
									</div>
									<div
										className="dropdown-item-list-icon"
										id="dropdown-icon-share"
									>
										<Link to="/" className="dropdown-item">
											<img src={facebook_icon} alt="facebook-icon" />
										</Link>
									</div>
									<div
										className="dropdown-item-list-icon"
										id="dropdown-icon-share"
									>
										<Link to="/" className="dropdown-item">
											<img src={gmail_icon} alt="gmail-icon" />
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link to="">
								<img
									className="nav-icons"
									src={contact_icon}
									alt="User"
									data-toggle="modal"
									data-target="#exampleModal"
									id="contact-icon"
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default NavBar;
