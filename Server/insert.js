let mysql = require("mysql");
const fs = require("fs");
require("dotenv").config();
const rawdata = fs.readFileSync("./songsdata.json");
let datas = JSON.parse(rawdata);

let connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});
let sql;

datas.map((data, index) => {
	// sql = `insert into artistData (artist_name) values ("${data.artist_name}")`;
	// connection.query(sql, (err, res) => {
	// 	if (err) throw err;
	// });
	sql = `insert into albumData (album_name) values ("${data.album_name}")`;
	connection.query(sql, (err, res) => {
		if (err) throw err;
	});
	// sql = `insert into playlistData (playlist_name) values ("${data.playlist_name}")`;
	// connection.query(sql, (err, res) => {
	// 	if (err) throw err;
	// });
// 	sql = `insert into songData (song_name,artist_id,album_id,playlist_id,duration) values ("${data.song_name}","1","1","1","${data.duration}")`;
// 	connection.query(sql, (err, res) => {
// 		if (err) throw err;
// 	});
	console.log('complete');
});
connection.end();
