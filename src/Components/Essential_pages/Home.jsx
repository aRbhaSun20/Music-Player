import React, { Component } from "react";

import Song from "./Song";
import AlbumSection from "./AlbumSection";

import "../Styles/style.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import playlist_icon from "../Images/Icons/Playlist.png";
import song_album_list from "../Images/Icons/Songs-Album-list.png";
import play_previous_icon from "../Images/Icons/PLay-Previous-big.svg";
import play_next_big_icon from "../Images/Icons/Play-Next-big.svg";

class Home extends Component {
	state = {};
	render() {
		return (
			<div className="">
				<div className="page-section">
					<img
						className="Playlist-add"
						src={playlist_icon}
						alt="playlist-add"
					/>
					<div className="Album-Image-Section">
						<div className="album-section">
							<AlbumSection />
						</div>
						<a
							href="#carouselExampleControls"
							role="button"
							data-slide="prev"
							className="carousel-control-prev"
						>
							<img src={play_previous_icon} alt="previous-icon" aria-hidden="true"/>
							<span className="sr-only">Previous</span>
						</a>
						<a
							href="#carouselExampleControls"
							role="button"
							data-slide="next"
							className="carousel-control-next"
						>
							<img src={play_next_big_icon} alt="next-icon"  aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
					<div className="feature-section">
						<h3 className="featured">FEATURED</h3>
						<h4 className="this-week">this week</h4>
					</div>
					<div className="main-song-lists">
						<Song />
						<Song />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
