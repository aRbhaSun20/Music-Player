import React, { Component } from "react";

import Song from "./Song";

import "../Styles/style3.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import song_playing from "../Images/Icons/Now-Playing-album.svg";

class NowPlaying extends Component {
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
			<div className="Now-playing">
				<div className="page-section">
					<div className="current-song-playing">
						<div className="playlist-details">
							<div className="album-song-now">
								<img
									className="song-playing-album-now"
									src={song_playing}
									alt="album-now"
								/>
								<div className="song-details-now">
									<div className="song">
										{this.state.current_playing.song_name}
									</div>
									<div className="song-artist">
										{this.state.current_playing.artist}
									</div>
									<div className="song-album">
										{this.state.current_playing.album}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="main-song-lists">
						<div className="song-list">
							{this.props.musicalData.map((Songdata, index) => {
								return (
									<div key={index}>
										<Song
											deleteSong={this.deleteSong}
											Songdata={Songdata}
											index={index}
											identify="now"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NowPlaying;
