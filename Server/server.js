const port = process.env.PORT || 4000;

const io = require("socket.io").listen(port, () =>
	console.log(`Listening on port ${port}`)
).sockets;
const axios = require("axios");
const mongo = require("mongodb").MongoClient;
const assert = require("assert");

const dbName = "OscillationsDb";
const url = `mongodb://localhost:27017/`;

io.on("connection", (socket) => {
	console.log("New client connected");
	socket.emit("FromAPI");

	mongo.connect(url, { useUnifiedTopology: true }, (err, client) => {
		assert.equal(null, err);
		if (err) {
			throw err;
		}
		const db = client.db(dbName);
		console.log("Connected successfully to server and connected db"); // db created

		let musicData = db.collection("MusicData");
		let browseData = db.collection("MusicData");

		musicData.find({}).toArray((err, res) => {
			if (err) {
				throw err;
			}
			socket.emit("MusicData", res);
			client.close();
		});

		browseData.find({}).toArray((err, res) => {
			if (err) {
				throw err;
			}
			socket.emit("BrowseMusicData", res);
			client.close();
		});
		socket.on("browseRead", (data) => {
			browseData.insertOne(data, (err, res) => {
				if (err) {
					throw err;
				}
				console.log("insert complete");
				client.close();
			});
		});

		socket.on("disconnect", () => {
			console.log("Client disconnected");
		});
	});
});
