import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../Styles/style7.css";
import arrow from "../Images/Icons/arrow.svg";
import wall1 from "../Images/Icons/wallpaper1.png";
import wall2 from "../Images/Icons/wallpaper2.png";

class LogIn extends Component {
	render() {
		return (
			<div className="login">
				<div className="loginItems">
					<div className="loginTitle">Log in.</div>
					<div className="login-data">
						Login with your data you enetered during your registration{" "}
					</div>
					<div className="email">
						<div>Your E-mail</div>
						<div className="input-box">
							<input
								className="inputs"
								type="text"
								name="email"
								placeholder="demo@domain.com"
							/>
						</div>
					</div>
					<div className="password">
						<div>Password</div>
						<div className="input-box">
							<input
								className="inputs"
								type="text"
								name="pwd"
								id="pwd"
								placeholder="Enter your password"
							/>
						</div>
					</div>
					<div className="keeplogged">
						<input type="checkbox" />
						<div>Keep me logged in</div>
					</div>
					<div className="loginBtn">
						<button className="btn">
							Log In <img className="arrow" src={arrow} alt="arrow" />
						</button>
						<div className="login-text">
							<div className="dont-specify">
								Don't have account ?
								<Link to="/signup">
									<div className="specify-text"> Sign Up </div>
								</Link>
							</div>
							<div className="specify-text-forgot"> Forgot Password? </div>
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

export default LogIn;
