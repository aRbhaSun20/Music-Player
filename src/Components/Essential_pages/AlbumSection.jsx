import React, { Component } from "react";

import "../Styles/style.css";

import AsalMein from "../Images/final-album/Asal Mein.png";
import Baarish from "../Images/final-album/Baarish lete aana.png";
import Arijth_album from "../Images/final-album/arijith-song.png";
import play_previous_icon from "../Images/Icons/PLay-Previous-big.svg";
import play_next_big_icon from "../Images/Icons/Play-Next-big.svg";
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
						<img src={AsalMein} className="d-block w-100 motion-album" alt />
					</div>
					<div className="carousel-item">
						<img src={Baarish} className="d-block w-100 motion-album" alt />
					</div>
					<div className="carousel-item">
						<img
							src={Arijth_album}
							className="d-block w-100 motion-album"
							alt
						/>
					</div>
				</div>
				{/* <a
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
					className="carousel-control-prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
					className="carousel-control-next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a> */}
			</div>
		);
	}
}

export default AlbumSection;
