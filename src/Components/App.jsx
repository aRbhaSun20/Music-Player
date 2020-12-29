import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Essential_pages/Nav_bar";
import MusicBar from "./Essential_pages/Music_bar";
import Home from "./Essential_pages/Home";
import Settings from "./Essential_pages/Settings";
import NowPlaying from "./Essential_pages/Now_Playing";
import Browse from "./Essential_pages/Browse";
import EndingPage from "./Essential_pages/EndingPage";
import Contact from "./Essential_pages/Contact";
import LogIn from "./Essential_pages/LogIn";
import SigUp from "./Essential_pages/SignUp";
import privacyPolicy from "./Essential_pages/privacyPolicy";
import Userdetails from "./Essential_pages/Userdetails";
import RecentList from "./Essential_pages/Recentlist";
import Visualizer from "./Essential_pages/Visualizer";

import "./Styles/index.css";
let socket;
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: false,
			endpoint: "localhost:4000",
			musicData: [],
			currentIndex: 0,
			musicLength: 0,
			browsemusicData: [],
			recentmusicData: [],
			recentLength: 0,
			userData: [],
			nowPlaying: false,
			theme: true,
			userId: null,
			userEmail: "unknown",
			userName: "unknown",
		};
	}

	initial = "unknown";

	componentDidMount() {
		const { endpoint } = this.state;
		socket = socketIOClient(endpoint);
		socket.on("FromAPI", () => console.log("connected to backend"));
		socket.on("MusicData", (data) => {
			this.setState({ musicData: data });
			this.setState({ musicLength: data.length });
		});
		socket.on("BrowseMusicData", (data) =>
			this.setState({ browsemusicData: data })
		);
		socket.on("RecentMusicData", (data) =>
			this.setState({ recentmusicData: data })
		);
		socket.on("currentUser", (data) => {
			this.setState({ userId: data[0].login_id });
			this.setState({ userEmail: data[0].email });
			this.setState({ userEmail: data[0].user_name });
		});
		socket.on("UserData", (data) => this.setState({ userData: data }));
	}

	changeTheme = (data) => this.setState({ theme: data });

	nowPlaying = (data) => this.setState({ nowPlaying: data });

	currentSong = (index) => {
		let len = this.state.musicLength;
		if (index <= len) {
			socket.emit("recentRead", this.state.musicData[index]);
			this.setState({ currentIndex: index });
			return [
				this.state.musicData[index].song_name,
				this.state.musicData[index].artist_name,
			];
		} else {
			socket.emit("recentRead", this.state.musicData[index]);
			this.setState({ currentIndex: len - 1 });
			return [
				this.state.musicData[len - 1].song_name,
				this.state.musicData[len - 1].artist_name,
			];
		}
	};

	deleteSong = (data) => socket.emit("deleteData", data);

	loginUserData = (data) => socket.emit("loginUser", data);

	signUpUserData = (data) => socket.emit("signUpUser", data);

	searchSongData = (data) => socket.emit("searchBrowse", data);

	handleFeedback = (data) => socket.emit("feedbackData", data);

	logOutUser = () => {
		socket.emit("logoutUser", this.state.userId);
		this.setState({ userEmail: this.initial });
	};

	changeDetails = (data) => {
		if (data[0] === "favourite") {
			data.push(this.state.musicData[this.state.currentIndex].favourite + 1);
		} else if (data[0] === "likes") {
			data.push(this.state.musicData[this.state.currentIndex].likes + 1);
		} else if (data[0] === "dislikes") {
			data.push(this.state.musicData[this.state.currentIndex].dislikes + 1);
		}
		socket.emit("changeDetails", data);
	};

	render() {
		return (
			<Router>
				<Switch>
					<React.Fragment>
						<div
							className={`${this.state.theme ? " main-dark " : "main-light"}`}
						>
							<NavBar
								changeTheme={this.changeTheme}
								nowPlaying={this.nowPlaying}
								handleSearch={this.searchSongData}
							/>
							<section className="page1">
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
									render={() => (
										<Settings
											userName={this.state.userName}
											userEmail={this.state.userEmail}
											changetheme={this.changeTheme}
											handleLogout={this.logOutUser}
										/>
									)}
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
									path="/recent_playing"
									render={() => (
										<RecentList
											deleteSongData={this.deleteSong}
											musicalData={this.state.recentmusicData}
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
								<Route
									path="/contact"
									exact
									render={() => (
										<Contact handleFeedback={this.handleFeedback} />
									)}
								/>
								<Route
									path="/login"
									exact
									render={() => (
										<LogIn
											loginUserData={this.loginUserData}
											userName={this.state.userName}
										/>
									)}
								/>
								<Route
									path="/signup"
									exact
									render={() => <SigUp signUpUserData={this.signUpUserData} />}
								/>
								<Route
									path="/userdetails"
									exact
									render={() => <Userdetails details={this.state.userData} />}
								/>
								<Route path="/privacy" component={privacyPolicy} />

								<Route
									path="/visualize"
									exact
									render={() => (
										<Visualizer
											details={[
												this.state.musicData,
												this.state.recentmusicData,
												this.state.browsemusicData,
											]}
										/>
									)}
								/>
							</section>
							<MusicBar
								changeDetails={this.changeDetails}
								changenow={this.state.nowPlaying}
								currentMusic={this.currentSong}
								listLength={this.state.musicLength}
							/>
							<EndingPage />
						</div>
					</React.Fragment>
				</Switch>
			</Router>
		);
	}
}

export default App;
