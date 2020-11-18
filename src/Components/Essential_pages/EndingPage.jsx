import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Styles/style.css";

import facebook from "../Images/Icons/facebook_ending.svg";
import instagram from "../Images/Icons/insta_ending.svg";
import twitter from "../Images/Icons/twitter_ending.svg";
import youtube from "../Images/Icons/youtube_ending.svg";

class EndingPage extends Component {
	render() {
		return (
			<div className="ending-section">
				<div className="info">
					<Link to="/contact">
						<div className="address">
							<div className="addTitle">Our Location</div>
							<div className="lowertext">
								GSKSJTI, K R CIRCLE Bangalore, 560001 Karnataka, India
							</div>
						</div>
					</Link>
					<div className="contact">
						<div className="addTitle">Our Contact</div>
						<div className="lowertext">
							demo.oscillations@gmail.com +91 11005 11288
						</div>
					</div>

					<div className="team-members">
						<div className="addTitle">Team Members</div>
						<div className="lowertext">Blah - Blah</div>
						<div />
					</div>
					<div className="social">
						<img src={facebook} alt="facebook" />
						<img src={instagram} alt="instagram" />
						<img src={twitter} alt="twitter" />
						<img src={youtube} alt="youtube" />
						<div className="follow">Follow us</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EndingPage;
