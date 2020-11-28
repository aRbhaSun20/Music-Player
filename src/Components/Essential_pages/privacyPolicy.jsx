import React, { Component } from "react";
import "../Styles/style.css"
import privacy from "../Images/Icons/privacy.png"
class privacyPolicy extends Component {
	render() {
		return(
			<div className="privacy-policy">
				<img src={privacy} alt="privacy"/>
			</div>
		)
	}
}

export default privacyPolicy;
