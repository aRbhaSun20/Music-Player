import React, { Component } from "react";
import Song from "./Song";
import AlbumSection from "./AlbumSection";

import "../Styles/index.css";

import playlist_icon from "../Images/Icons/Playlist.png";

class Home extends Component {
	state = {};

	deleteSong = (data) => this.props.deleteSongData(data);

	render() {
		return (
			<div className="home-page">
				<div className="page-section">
					<img
						className="Playlist-add"
						src={playlist_icon}
						alt="playlist-add"
					/>

					<div className="Album-Image-Section">
						<AlbumSection element="carousal-class-to-inject" />
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
