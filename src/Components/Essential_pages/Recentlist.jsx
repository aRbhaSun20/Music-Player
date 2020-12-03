import React, { Component } from "react";

import RecentSong from "./RecentSong";

import "../Styles/index.css";

import song_playing from "../Images/Icons/Now-Playing-album.svg";

class RecentList extends Component {
	state = {
		current_playing: {
			song_name: "song_name",
			artist: "Unknown Artist",
			album: "Unknown ALbum",
		},
	};
	deleteSong = (data) => this.props.deleteSongData(data);

	render() {
		return (
			<div className="Recent-playing">
				<div className="page-section">
					<div className="current-song-playing">
						<div className="album-song-now">
							<img
								className="song-playing-album-now"
								src={song_playing}
								alt="album-now"
							/>
						</div>
					</div>
					<div className="main-song-lists">
						{this.props.musicalData.map((Songdata, index) => {
								return (
									<div key={index}>
										<RecentSong
											deleteSong={this.deleteSong}
											Songdata={Songdata}
											index={index}
											identify="recent"
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

export default RecentList;
