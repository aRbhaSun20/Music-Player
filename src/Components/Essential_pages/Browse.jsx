import React, { Component } from "react";

import Song from "./Song";
import "../Styles/style.css";
import "../Styles/style2.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Browse extends Component {
	state = {};
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
											<Song Songdata={Songdata} index={index} />
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
