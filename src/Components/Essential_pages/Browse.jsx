import React, { Component } from "react";

import Song from "./Song";
import "../Styles/style.css";
import "../Styles/style2.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Browse extends Component {
	recentSongslist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];
	state = {};
	render() {
		return (
			<div className="">
				<div className="browse">
					<div className="page-section">
						<div className="main-song-lists">
							{this.props.musicalData.map((Songdata, index) => {
								return (
									<div key={index}>
										<Song Songdata={Songdata} />
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
