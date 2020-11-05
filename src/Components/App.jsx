import React, { Component } from "react";

import NavBar from "./Essential_pages/Nav_bar";
import BottomBar from "./Essential_pages/Bottom_bar";
import BottomMainbar from "./Essential_pages/BottomMainbar";
import Home from "./Essential_pages/Home";
import Settings from "./Essential_pages/Settings";
import NowPlaying from "./Essential_pages/Now_Playing";
import Browse from "./Essential_pages/Browse";
import Share from "./Essential_pages/Share";
import ModalSection from "./Essential_pages/ModalSection";

import BackEnd from "./BackEnd";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Styles/style.css";

class App extends Component {
	state = {};
	render() {
		return (
			<div className="">
				<Router>
					<div className="main">
						<NavBar />
						<section class="page1">
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/settings" component={Settings} />
								<Route path="/now_playing" component={NowPlaying} />
								<Route path="/browse" component={Browse} />
								<Route path="/share" component={Share} />
							</Switch>
							<BottomMainbar />
						</section>

						<BottomBar />
						<BackEnd SendComp={this.MailComp} ref="backend" />
					</div>
				</Router>

				<ModalSection />
			</div>
		);
	}
}

export default App;
