import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Essential_pages/Nav_bar";
import BottomBar from "./Essential_pages/Bottom_bar";
import BottomMainbar from "./Essential_pages/BottomMainbar";
import Home from "./Essential_pages/Home";
import Settings from "./Essential_pages/Settings";
import NowPlaying from "./Essential_pages/Now_Playing";
import Browse from "./Essential_pages/Browse";
import Share from "./Essential_pages/Share";
import ModalSection from "./Essential_pages/ModalSection";
import EndingPage from "./Essential_pages/EndingPage";
import Contact from "./Essential_pages/Contact";
import LogIn from "./Essential_pages/LogIn";
import SigUp from "./Essential_pages/SignUp";
import Preferences from "./Essential_pages/Preferences";

import "./Styles/style.css";
let socket;
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: false,
			endpoint: "localhost:4000",
			musicData: [],
			musicLength: 0,
			browsemusicData: [],
			browseLength: 0,
			nowPlaying: false,
			theme: true,
		};
	}

	componentDidMount() {
		const { endpoint } = this.state;
		socket = socketIOClient(endpoint);
		socket.on("FromAPI", () => console.log("connected to backend"));
		socket.on("MusicData", (data) => {
			console.log("music data received");
			this.setState({ musicData: data });
			this.setState({ musicLength: data.length });
		});
		socket.on("BrowseMusicData", (data) => {
			console.log("browse data received");
			this.setState({ browsemusicData: data });
			this.setState({ browseLength: data.length });
		});
	}

	changeTheme = (data) => {
		this.setState({ theme: data });
	};

	nowPlaying = (data) => {
		this.setState({ nowPlaying: data });
	};

	currentSong = (index) => {
		let len = this.state.musicLength;
		if (index <= len) {
			socket.emit("browseRead", this.state.musicData[index]);
			return [
				this.state.musicData[index].song_name,
				this.state.musicData[index].artist_name,
			];
		} else {
			socket.emit("browseRead", this.state.musicData[index]);
			return [
				this.state.musicData[len - 1].song_name,
				this.state.musicData[len - 1].artist_name,
			];
		}
	};

	deleteSong = (data) => {
		socket.emit("deleteData", data);
	};

	loginUserData = (data) => {
		console.log(data);
		socket.emit("loginUser", data);
	};

	signUpUserData = (data) => {
		console.log(data);
		socket.emit("signUpUser", data);
	};
	
	render() {
		return (
			<Router>
				<div className={`${this.state.theme ? " main-dark " : "main-light"}`}>
					<NavBar changeTheme={this.changeTheme} />
					<section className="page1">
						<Switch>
							<Route
								path="/"
								exact
								render={() => (
									<Home
										deleteSongData={this.deleteSong}
										musicalData={this.state.musicData}
									/>
								)}
							/>
							<Route
								path="/settings"
								render={() => <Settings changetheme={this.changeTheme} />}
							/>
							<Route
								path="/now_playing"
								render={() => (
									<NowPlaying
										deleteSongData={this.deleteSong}
										musicalData={this.state.musicData}
									/>
								)}
							/>
							<Route
								path="/browse"
								render={() => (
									<Browse
										deleteSongData={this.deleteSong}
										musicalData={this.state.browsemusicData}
									/>
								)}
							/>
							<Route path="/share" component={Share} />
							<Route path="/preference" component={Preferences} />
							<Route path="/contact" exact render={() => <Contact />} />
							<Route
								path="/login"
								exact
								render={() => <LogIn loginUserData={this.loginUserData} />}
							/>
							<Route
								path="/signup"
								exact
								render={() => <SigUp signUpUserData={this.signUpUserData} />}
							/>
						</Switch>
						<BottomMainbar nowPlaying={this.nowPlaying} />
					</section>
					<BottomBar
						changenow={this.state.nowPlaying}
						currentMusic={this.currentSong}
						listLength={this.state.musicLength}
					/>
					<EndingPage />
				</div>
				<ModalSection />
			</Router>
		);
	}
}

export default App;
