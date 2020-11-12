const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const DataBase = require("./DataBase");

const port = process.env.PORT || 4000;
const index = require("./routes/index");
const fs = require("fs");

const app = express();
app.use(index);

const MusicalDb = new DataBase();

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

const rawdata = fs.readFileSync("./songsdata.json")
let musicaldata = JSON.parse(rawdata);

io.on("connection", (socket) => {
	console.log("New client connected");
	socket.emit("FromAPI");
	socket.emit("MusicData",musicaldata)
	socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

let WriteData = (data) => {
	//to Mongodb
	// Musicaldb.writeData(data);
};
