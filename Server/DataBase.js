let mysql = require("mysql");

const musicConnection = mysql.createConnection({
	host: "localhost",
	user: "arb",
	password: "Arb@1606",
	database: "CompleteMusic",
});

const browseConnection = mysql.createConnection({
	host: "localhost",
	user: "arb",
	password: "Arb@1606",
	database: "BrowseMusic",
});

const userConnection = mysql.createConnection({
	host: "localhost",
	user: "arb",
	password: "Arb@1606",
	database: "UserInfo",
});

musicConnection.connect((err, res) => {
	if (err) throw err;
	console.log("conneted... music");
});
browseConnection.connect((err, res) => {
	if (err) throw err;
	console.log("conneted... browse");
});
userConnection.connect((err, res) => {
	if (err) throw err;
	console.log("conneted... user");
});

let fetchQuery = `select
  song_id,
  song_name,
  playlist_name,
  artist_name,
  album_name,
  duration,
  likes,
  dislikes
from
  songData
  INNER JOIN artistData ON songData.artist_id = artistData.artist_id
  INNER JOIN albumData ON songData.album_id = albumData.album_id
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id`;

musicConnection.query(sql, (err, res) => {
	if (err) throw err;
	// console.log(res[0].song_id)
	res.map((data) => {
		console.log(data.song_id, "music")
	})
});

// browseConnection.query(sql, (err, res) => {
// 	if (err) throw err;
// 	// console.log(res[0].song_id)
// 	res.map((data) => {
// 		console.log(data.song_id, "browse");
// 	});
// });
musicConnection.end();
browseConnection.end();
userConnection.end();
