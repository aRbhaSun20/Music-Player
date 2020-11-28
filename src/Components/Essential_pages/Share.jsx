import React, { Component } from "react";

import "../Styles/index.css";

import playlist_share_icon from "../Images/Icons/playlist-share.svg";
import share_icon from "../Images/Icons/share-icon-share.svg";
import favourite_icon from "../Images/Icons/favourite-share.svg";
import google_icon from "../Images/Icons/google-icon.svg";
import facebook_icon from "../Images/Icons/facebook-icon.svg";
import gmail_icon from "../Images/Icons/gmail-icon.svg";

class Share extends Component {
	render() {
		return (
			<div className="Share-page">
				<div id="share-bar" className="share-bar">
					<div className="top-bar-share">
						<div className="top-bar-share-headings">
							<div className="share-heading1">INDIA'S MODERN MUSIC APP</div>
							<div className="share-heading2">
								over 100 songs to suit every mood and occasions
							</div>
						</div>
						<div className="icons-headings">
							<div className="icon-heading">
								<img src={playlist_share_icon} alt="playlist-icon" />
								<div className="icon-heading-indi">
									Create your own playlists
								</div>
							</div>
							<div className="icon-heading">
								<img src={share_icon} alt="share-icon" />
								<div className="icon-heading-indil">
									Share music with family and friends
								</div>
							</div>
							<div className="icon-heading">
								<img src={favourite_icon} alt="favorite-icon" />
								<div className="icon-heading-indi">Save your favourites</div>
							</div>
						</div>
					</div>
					<div className="divider-line-share" />
					<div className="bottom-bar-share">
						<div className="insert-phone-number">
							<button type="submit">Phone Number</button>
						</div>
						<div className="continue">
							<div className="divider-mini" />
							<div className="continue-text">or continue with</div>
							<div className="divider-mini" />
						</div>
						<div className="share-icons-list">
							<img src={google_icon} alt="google-icon" />
							<img src={facebook_icon} alt="facebook-icon" />
							<img src={gmail_icon} alt="gmail-icon" />
						</div>
						<div className="divider-mini1" />
						<div className="last-text">
							<div className="new-share">New to App ?</div>
							<div className="signup-Now">Signup</div>
							Now
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Share;
