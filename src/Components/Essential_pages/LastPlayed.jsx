import React, { Component } from "react";
import RecentSong from "./RecentSong";

import "../Styles/index.css";

class LastPlayed extends Component {
	noOfDays = 0;
	state = {
		noOfDays: 0,
	};
	lastPlayed = (evnt) => {
		if (evnt.target.id === "year") {
			this.noOfDays = 365;
		} else if (evnt.target.id === "month") {
			this.noOfDays = 30;
		} else if (evnt.target.id === "week") {
			this.noOfDays = 7;
		}
		this.props.fetchlast(this.noOfDays);
	};
	handleChange = (evnt) => {
		this.noOfDays = Number(evnt.target.value);
		this.props.fetchlast(this.noOfDays);
	};

	deleteSong = (data) => this.props.deleteSongData(data);
	render() {
		return (
			<div className="last-played">
				<div className="top-bar">
					<h1 className="title">Recent List Songs</h1>
					<div className="sub-heading">
						<div
							onClick={this.lastPlayed}
							id="year"
							className="sub-heading-link"
						>
							Last One Year
						</div>
						<div
							onClick={this.lastPlayed}
							id="month"
							className="sub-heading-link"
						>
							Last One month
						</div>
						<div
							onClick={this.lastPlayed}
							id="week"
							className="sub-heading-link"
						>
							Last One week
						</div>
						<div id="random" className="sub-heading-link input-text">
							<input
								onChange={this.handleChange}
								type="text"
								defaultValue="0"
							/>
							Random days
						</div>
					</div>
				</div>
				<div className="main-song-lists">
					{
						// eslint-disable-next-line
						this.props.musicalData.map((Songdata, index) => {
							if (Songdata.length !== 0) {
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
							}
						})
					}
				</div>
			</div>
		);
	}
}

export default LastPlayed;
