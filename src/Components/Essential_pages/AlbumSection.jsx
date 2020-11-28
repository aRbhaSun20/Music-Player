import React, { Component } from "react";

import "../Styles/style.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import hawaBanke from "../Images/Artist/hawaBanke.jpg";
import hawaBanke2 from "../Images/Artist/hawaBanke2.jpg";
import kinnasonna from "../Images/Artist/kinnasonna.jpg";
import vaaste from "../Images/Artist/vaaste.jpg";
import ruladiya from "../Images/Artist/ruladiya.jpg";
import amitabh from "../Images/Artist/amitabh4.jpg";
import arijith from "../Images/Artist/arijth4.jpg";
import asalMein from "../Images/Artist/asal-mein.jpg";
import baarish from "../Images/Artist/baarish.jpg";
import downtown from "../Images/Artist/downtown.jpg";
import ishareTere from "../Images/Artist/ishareTere.jpg";
import lahore from "../Images/Artist/lahore.jpg";
import slowly from "../Images/Artist/slowly-slowly.jpg";

class AlbumSection extends Component {
	state = {
		albumImages: [
			hawaBanke,
			hawaBanke2,
			kinnasonna,
			vaaste,
			ruladiya,
			arijith,
			asalMein,
			baarish,
			baarish,
			downtown,
			ishareTere,
			lahore,
			slowly,
		],
	};

	render() {
		return (
			<div
				id="carouselExampleControls"
				style={{ width: "75vh" }}
				className="carousel slide carousel-fade"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={amitabh}
							className="d-block motion-album"
							alt="songs-list"
						/>
					</div>
					{this.state.albumImages.map((album, index) => {
						return (
							<div className="carousel-item" key={index}>
								<img
									src={album}
									className="d-block motion-album"
									alt="songs-list"
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default AlbumSection;
