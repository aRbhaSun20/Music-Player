import React, { Component } from "react";

import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import "../Styles/index.css";

import arrow from "../Images/Icons/arrow.svg";
import wall from "../Images/Icons/log.svg";

class LogIn extends Component {
	state = {
		Email: "",
		Password: "",
		show: false,
	};

	handleChange = (event) => {
		event.preventDefault();
		switch (event.target.id) {
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

	handleClose = (evnt) => {
		this.setState({ show: false });
	};

	handleToggle = (evnt) => {
		evnt.preventDefault();
		this.setState({ show: true });
	};

	HandleSubmit = (event) => {
		event.preventDefault();
		this.props.loginUserData(this.state);
		this.handleToggle;
	};

	render() {
		return (
			<div className="login">
				<Toast
					className="popupMesage"
					onClose={this.handleClose}
					show={this.state.show}
					delay={2000}
					autohide
				>
					<Toast.Header>
						<strong className="mr-auto">LogIN Status</strong>
						<small>User with Email {this.state.Email} has Logged In</small>
					</Toast.Header>
					<Toast.Body>
						Welcome Back {this.props.userName}!! good to see you Back Bro!!!
					</Toast.Body>
				</Toast>
				<div className="images">
					<img src={wall} alt="" />
				</div>
				<div className="loginItems">
					<div className="loginTitle">Log in.</div>
					<div className="login-data">
						Login with your data you enetered during your registration
					</div>
					<div className="email">
						<div>Your E-mail</div>
						<div className="input-box">
							<input
								className="inputs"
								type="text"
								name="email"
								id="Email"
								value={this.state.Email}
								placeholder="demo@domain.com"
								onChange={this.handleChange}
							/>
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
								value={this.state.Password}
								placeholder="Enter your password"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="keeplogged">
						<input type="checkbox" />
						<div>Keep me logged in</div>
					</div>
					<div className="loginBtn">
						<button className="btn" onClick={this.HandleSubmit}>
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
			</div>
		);
	}
}

export default LogIn;
