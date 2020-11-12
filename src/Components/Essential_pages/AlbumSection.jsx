import React, { Component } from "react";

import "../Styles/style.css";

import AsalMein from "../Images/final-album/Asal Mein.png";
import Baarish from "../Images/final-album/Baarish lete aana.png";
import Arijth_album from "../Images/final-album/arijith-song.png";
class AlbumSection extends Component {
	render() {
		return (
			<div
				id="carouselExampleControls"
				style={{ width: "75vh" }}
				className="carousel slide carousel-fade"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						className="active"
						data-target="#carouselExampleFade"
						data-slide-to={0}
					/>
					<li data-target="#carouselExampleFade" data-slide-to={1} />
					<li data-target="#carouselExampleFade" data-slide-to={2} />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={AsalMein}
							className="d-block w-100 motion-album"
							alt="songs-list"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={Baarish}
							className="d-block w-100 motion-album"
							alt="songs-list"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={Arijth_album}
							className="d-block w-100 motion-album"
							alt="songs-list"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default AlbumSection;
