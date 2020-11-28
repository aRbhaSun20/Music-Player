import React, { Component } from "react";

import Song from "./Song";
import "../Styles/index.css";

class Browse extends Component {
	state = {};

	deleteSong = (data) => this.props.deleteSongData(data);

	render() {
		return (
			<div className="">
				<div className="browse">
					<div className="page-section">
						<div className="main-song-lists">
							{this.props.musicalData
								.slice("")
								.reverse()
								.map((Songdata, index) => {
									return (
										<div key={index}>
											<Song
												Songdata={Songdata}
												index={index}
												identify="browse"
												deleteSong={this.deleteSong}
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

export default Browse;
