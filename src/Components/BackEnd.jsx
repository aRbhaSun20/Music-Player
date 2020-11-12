// import { Component } from "react";
// import socketIOClient from "socket.io-client";

// class BackEnd extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			response: false,
// 			endpoint: "localhost:5000",
// 		};
// 	}

// 	componentDidMount() {
// 		const { endpoint } = this.state;
// 		const socket = socketIOClient(endpoint);
// 		socket.on("FromAPI", () => console.log('connected to backend'));
// 		socket.on("MusicData",(data) => {
// 			this.props.music(data)
// 		})
// 	}

// 	// showAlert = (MailComp) => {
// 	// 	console.log("backend", MailComp);
// 	// 	const { endpoint } = this.state;
// 	// 	const socket = socketIOClient(endpoint);

// 	// 	socket.emit("from", MailComp);
// 	// };


// 	render() {
// 		return null;
// 	}
// }

// export default BackEnd;
