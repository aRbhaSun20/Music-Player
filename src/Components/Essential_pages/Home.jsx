import React, { Component } from "react";
import Song from "./Song";
import AlbumSection from "./AlbumSection";

import "../Styles/style.css";

import playlist_icon from "../Images/Icons/Playlist.png";
import Search_Icon from "../Images/Icons/Search-Icon.svg";
import play_previous_icon from "../Images/Icons/PLay-Previous-big.svg";
import play_next_big_icon from "../Images/Icons/Play-Next-big.svg";

class Home extends Component {
	state = {};

	deleteSong = (data) => this.props.deleteSongData(data);

	render() {
		return (
			<div className="">
				<div className="page-section">
					<img
						className="Playlist-add"
						src={playlist_icon}
						alt="playlist-add"
					/>
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
							<div className="text">
								Search
							</div>
							
						</div>
					</div>
					<div className="Album-Image-Section">
						<a
							href="#carouselExampleControls"
							role="button"
							data-slide="prev"
							className="carousel-control-prev"
						>
							<img
								src={play_previous_icon}
								alt="previous-icon"
								aria-hidden="true"
							/>
							<span className="sr-only">Previous</span>
						</a>
						<div className="album-section">
							<AlbumSection />
						</div>
						<a
							href="#carouselExampleControls"
							role="button"
							data-slide="next"
							className="carousel-control-next"
						>
							<img
								src={play_next_big_icon}
								alt="next-icon"
								aria-hidden="true"
							/>
							<span className="sr-only">Next</span>
						</a>
					</div>
					<div className="feature-section">
						<h3 className="featured">FEATURED</h3>
						<h4 className="this-week">this week</h4>
					</div>
					<div className="main-song-lists">
						{this.props.musicalData.map((Songdata, index) => {
							return (
								<div key={index}>
									<Song
										Songdata={Songdata}
										deleteSong={this.deleteSong}
										index={index}
										identify="home"
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

export default Home;
