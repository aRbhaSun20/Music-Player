import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import NavBar from "./Essential_pages/Nav_bar";
import BottomBar from "./Essential_pages/Bottom_bar";
import BottomMainbar from "./Essential_pages/BottomMainbar";
import Home from "./Essential_pages/Home";
import Settings from "./Essential_pages/Settings";
import NowPlaying from "./Essential_pages/Now_Playing";
import Browse from "./Essential_pages/Browse";
import Share from "./Essential_pages/Share";
import ModalSection from "./Essential_pages/ModalSection";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Styles/style.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: false,
			endpoint: "localhost:4000",
			musicData: [],
			musicLength: 0,
			BrowsemusicData: [],
			changenow: false,
		};
		// console.log(props);
	}

	componentDidMount() {
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);
		socket.on("FromAPI", () => console.log("connected to backend"));
		socket.on("MusicData", (data) => {
			console.log("data received");
			this.setState({ musicData: data });
			this.setState({ musicLength: data.length });
		});
		socket.on("BrowseMusicData", (data) => {
			console.log("data received");
			this.setState({ BrowsemusicData: data });
		});
	}

	nowPlaying = (data) => {
		this.setState({ changenow: data });
	};

	currentSong = (index) => {
		let len = this.state.musicData.length;
		this.nowPlaying();
		if (index <= len) {
			return [
				this.state.musicData[index].Song.song_name,
				this.state.musicData[index].Artist.artist_name,
			];
		} else {
			return [
				this.state.musicData[len - 1].Song.song_name,
				this.state.musicData[len - 1].Artist.artist_name,
			];
		}
	};

	render() {
		return (
			<Router>
				<div className="main">
					<NavBar />
					<section className="page1">
						<Switch>
							<Route
								path="/"
								exact
								render={() => <Home musicalData={this.state.musicData} />}
							/>
							<Route path="/settings" component={Settings} />
							<Route
								path="/now_playing"
								render={() => <NowPlaying musicalData={this.state.musicData} />}
							/>
							<Route
								path="/browse"
								render={() => (
									<Browse musicalData={this.state.BrowsemusicData} />
								)}
							/>
							<Route path="/share" component={Share} />
						</Switch>
						<BottomMainbar nowPlaying={this.nowPlaying} />
					</section>
					<BottomBar
						changenow={this.state.changenow}
						currentMusic={this.currentSong}
						listLength={this.state.musicLength}
					/>
				</div>
				<ModalSection />
			</Router>
		);
	}
}

export default App;
