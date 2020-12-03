import React, { Component } from "react";

import clip from "../Images/Icons/clip.svg";
import contact from "../Images/Icons/contact.svg";
import camera from "../Images/Icons/camera.svg";

import "../Styles/index.css";

class User extends Component {
	render() {
		return (
			<div className="user-detail">
				<div className="top-bar">
					<img src={clip} alt="clip" className="clip" />
					<div className="top-bottom">
						<img src={camera} alt="camera" className="camera" />
						<img src={contact} alt="contact" className="contact" />
						<div className="details">
							<div className="user-id">{this.props.detail.user_id}</div>
							<div className="user-name">{this.props.detail.user_name}</div>
						</div>
					</div>
				</div>
				<div className="bottom-bar">
					<div className="sub-heading">
						<div className="column-name">User Email</div>
						<div className="column-value">{this.props.detail.email}</div>
					</div>{" "}
					<div className="sub-heading">
						<div className="column-name">MemberShip Status</div>
						<div className="column-value">
							{this.props.detail.membershipStatus}
						</div>
					</div>
					<div className="sub-heading">
						<div className="column-name">Last Login Timestamp</div>
						<div className="column-value">{this.props.detail.lastlogin}</div>
					</div>
					<div className="sub-heading">
						<div className="column-name">Login Status</div>
						<div className="column-value">{this.props.detail.loginStatus}</div>
					</div>
					<div className="sub-heading">
						<div className="column-name">No. of likes</div>
						<div className="column-value">{this.props.detail.numlikes}</div>
					</div>
					<div className="sub-heading">
						<div className="column-name">No. of dislikes</div>
						<div className="column-value">{this.props.detail.numdislikes}</div>
					</div>
					<div className="sub-heading">
						<div className="column-name">No. of favourites</div>
						<div className="column-value">{this.props.detail.numfavourites}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
