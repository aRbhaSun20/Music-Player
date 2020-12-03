import React, { Component } from "react";

import "../Styles/index.css";
import User from "./User";

class Userdetails extends Component {
	render() {
		return (
			<div className="User-details">
				{this.props.details.map((data, index) => {
					return (
						<div key={index}>
							<User detail={data} index={index} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default Userdetails;
