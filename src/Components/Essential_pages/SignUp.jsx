import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../Styles/style7.css";
import arrow from "../Images/Icons/arrow.svg";
import wall1 from "../Images/Icons/wallpaper1.png";
import wall2 from "../Images/Icons/wallpaper2.png";
import correct from "../Images/Icons/correct.svg";

class SignUp extends Component {
	state = {
		Name: "",
		Email: "",
		Password: "",
	};

	handleChange = (event) => {
		event.preventDefault();
		switch (event.target.id) {
			case "Name":
				this.setState({ Name: event.target.value });
				break;
			case "Email":
				this.setState({ Email: event.target.value });
				break;
			case "Password":
				this.setState({ Password: event.target.value });
				break;
			default:
				break;
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signUpUserData(this.state);
	};
	render() {
		return (
			<div className="sigin">
				<div className="loginItems">
					<div className="loginTitle">Sign Up.</div>
					<div className="sigin-data">
						Enter your details for registration and mail verification and
						password for login data.
					</div>
					<div className="email">
						<div>Your Name</div>
						<div className="input-box">
							<input
								className="inputs"
								type="text"
								name="email"
								id="Name"
								placeholder="Blah-blah"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="email-data">
						<div>
							Your E-mail
							<div className="input-box">
								<input
									className="inputs"
									type="text"
									name="email"
									id="Email"
									placeholder="demo@domain.com"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="verify-mail">
							<img className="correct" src={correct} alt="correct" />
							Verify your E-Mail
						</div>
					</div>
					<div className="password">
						<div>Password</div>
						<div className="input-box">
							<input
								className="inputs"
								type="password"
								name="pwd"
								id="Password"
								placeholder="Enter your password"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="keeplogged">
						<input type="checkbox" />
						<div>Keep me Signed in</div>
					</div>
					<div className="signBtn" >
						<button className="btn" onClick={this.handleSubmit} >
							Sign Up
							<img className="arrow" src={arrow} alt="arrow" />
						</button>
						<div className="signup-text">
							<div className="dont-specify">
								Already have an account ?
								<Link to="/login">
									<div className="specify-text">Log In </div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="wallpapers">
					<img className="wallpaper1" src={wall1} alt="wall1" />
					<img className="wallpaper2" src={wall2} alt="wall2" />
				</div>
			</div>
		);
	}
}

export default SignUp;