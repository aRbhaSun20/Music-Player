import React, { Component } from "react";

import Song from "./Song";

import "../Styles/style2.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Browse extends Component {
	state = {};
	render() {
		return (
			<div className="browse">
				<div className="page-section">
					<div className="main-song-lists">
						<Song />
						<Song />
						<Song />
						<Song />
					</div>
				</div>
			</div>
		);
	}
}

export default Browse;
