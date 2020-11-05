import { Component } from "react";
import socketIOClient from "socket.io-client";

class BackEnd extends Component {
	constructor() {
		super();
		this.state = {
			response: false,
			endpoint: "localhost:4001",
		};
	}

	MailComp = {};

	componentDidMount() {
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);
		socket.on("FromAPI", () => console.log('connected to backend'));
	}

	showAlert = (MailComp) => {
		console.log("backend", MailComp);
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);

		socket.emit("from", MailComp);
	};

	render() {
		return null;
	}
}

export default BackEnd;
