import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/index.css";

import facebook from "../Images/Icons/facebook_ending.svg";
import instagram from "../Images/Icons/insta_ending.svg";
import twitter from "../Images/Icons/twitter_ending.svg";
import youtube from "../Images/Icons/youtube_ending.svg";

class EndingPage extends Component {
	state = {
		icons: [facebook, instagram, twitter, youtube],
		alt: ["facebook", "instagram", "twitter", "youtube"],
	};
	render() {
		return (
			<div className="ending-section">
				<div className="info">
					<Link to="/contact">
						<div className="details">
							<div className="addTitle">OUR LOCATION</div>
							<div className="lowertext">
								GSKSJTI, K R CIRCLE Bangalore, 560 001 Karnataka, India
							</div>
						</div>
					</Link>
					<div className="details">
						<div className="addTitle">OUR CONTACTS</div>
						<div className="lowertext">
							demo.oscillations@gmail.com +91 11005 11288
						</div>
					</div>

					<div className="details">
						<div className="addTitle">Team Members</div>
						<div className="lowertext">Blah - Blah</div>
						<div />
					</div>
					<div className="details">
						<Link to="/privacy">
							<div className="addTitle">Terms and Conditions and policies</div>
						</Link>
						<div className="follow">
							
							{this.state.icons.map((item, index) => {
								return (
									<div className="" key={index}>
										<Link to="/">
											<img src={item} alt={this.state.alt[index]} />
										</Link>
									</div>
								);
							})}Follow us
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EndingPage;
