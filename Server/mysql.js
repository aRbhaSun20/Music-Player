require("dotenv").config();

const port = process.env.PORT || 4000;

let mysql = require("mysql");

const io = require("socket.io").listen(port, () =>
	console.log(`Listening on port ${port}`)
).sockets;

const song = `select * from songViewData`;
const browse = `select * from browseViewData`;
const recent = `select * from recentViewData`;
const userfetch = `select * from userViewData`;
const feedbackfetch = `select * from feedbackForm`;

const loginDetails = `select * from loginViewData`;

io.on("connection", (socket) => {
	// db connections
	const musicConnection = mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	});

	const fetchData = () => {
		// fetch the complete music data
		musicConnection.query(song, (err, res) => {
			if (err) throw err;

			socket.emit("MusicData", res);
		});

		// fetch the browse music data
		musicConnection.query(browse, (err, res) => {
			if (err) throw err;

			socket.emit("BrowseMusicData", res);
		});

		// fetch the recent music data
		musicConnection.query(recent, (err, res) => {
			if (err) throw err;

			socket.emit("RecentMusicData", res);
		});
	};
	const fetchUserData = () => {
		// fetch the user data
		musicConnection.query(userfetch, (err, res) => {
			if (err) throw err;

			socket.emit("UserData", res);
		});
	};

	const browseInsert = (data) => {
		let browseData = `insert into browseData (song_name,artist_id,album_id,playlist_id,duration) values (
            "${data.song_name}",
            "${data.artist_id}",
            "${data.album_id}",
            "${data.playlist_id}",
            "${data.duration}")`;
		musicConnection.query(browseData, (err, res) => {
			if (err) throw err;

			console.log("insert to browse complete");
			fetchData();
		});
	};

	console.log("New client connected");
	socket.emit("FromAPI");

	fetchData();
	fetchUserData();

	// insert to recent data
	socket.on("recentRead", (data) => {
		let insertRecent = `insert into recentData (song_name,artist_id,album_id,playlist_id,duration) values (
            "${data.song_name}",
            "${data.artist_id}",
            "${data.album_id}",
            "${data.playlist_id}",
            "${data.duration}")`;
		musicConnection.query(insertRecent, (err, res) => {
			if (err) throw err;

			console.log("insert to recent complete");
			fetchData();
		});
	});

	// insert to signUp data
	socket.on("signUpUser", (data) => {
		let insertUser = `insert into user (user_name,membershipStatus,email,password) values ('${data.Name}','false','${data.Email}','${data.Password}' )`;
		musicConnection.query(insertUser, (err, res) => {
			if (err) throw err;
			console.log("insert to signUp complete");
		});
	});

	// insert to login data
	socket.on("loginUser", (data) => {
		let logInUser = `insert into loginData (email,password) values ('${data.Email}','${data.Password}' )`;
		musicConnection.query(logInUser, (err, res) => {
			if (err) throw err;
			console.log("insert to logIn complete");
		});
		// fetch the current user details
		musicConnection.query(loginDetails, (err, res) => {
			if (err) throw err;
			socket.emit("currentUser", res);
		});
	});

	// insert to feedback data
	socket.on("feedbackData", (data) => {
		let feedbackData = `insert into feedbackForm (name,email,phone,message) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}')`;
		musicConnection.query(feedbackData, (err, res) => {
			if (err) throw err;
			console.log(`feedback insert complete`);
		});
	});

	// logOut user data
	socket.on("logoutUser", (data) => {
		let logOutUser = `update loginData set loginStatus = 'false' where login_id = ${data}`;
		musicConnection.query(logOutUser, (err, res) => {
			if (err) throw err;
			console.log(`${data} is logged out`);
		});
	});

	// search the browse data
	socket.on("searchBrowse", (data) => {
		let searchData = `select * from browseSearchView
                        where 
                            song_name like '%${data}%' or
                            artist_name like '%${data}%' or
                            album_name like '%${data}%' or
                            playlist_name like '%${data}%' `;

		let inserData = `select * from browseSearchView
                        where 
                            song_name like '${data}' or
                            artist_name like '${data}' or
                            album_name like '${data}' or
                            playlist_name like '${data}' `;

		// search every matching result
		musicConnection.query(searchData, (err, res) => {
			if (err) throw err;

			socket.emit("BrowseMusicData", res);
		});

		// search specific result
		musicConnection.query(inserData, (err, res) => {
			if (err) throw err;
			if (res) {
				res.map((data) => browseInsert(data));
			}
		});
	});

	// delete to browse/ recent/ song data
	socket.on("deleteData", (data) => {
		let deleteSongData = `delete from songData where song_id = ${data[0]}`;
		let deleteBrowseData = `delete from browseData where song_id = ${data[0]}`;
		let deleteRecentData = `delete from recentData where song_id = ${data[0]}`;
		if (data[1] == "home" || data[1] == "now") {
			musicConnection.query(deleteSongData, (err, res) => {
				if (err) throw err;

				console.log("delete to music list complete");
			});
		} else if (data[1] == "recent") {
			musicConnection.query(deleteRecentData, (err, res) => {
				if (err) {
					throw err;
				}
				console.log("delete to recent list complete");
			});
		} else {
			musicConnection.query(deleteBrowseData, (err, res) => {
				if (err) {
					throw err;
				}
				console.log("delete to browse list complete");
			});
		}
		fetchData();
	});

	// delete to user data
	socket.on("deleteUser", (data) => {
		let deleteUser = `delete from user where user_id = ${data[0]}`;
		musicConnection.query(deleteUser, (err, res) => {
			if (err) {
				throw err;
			}
			console.log("delete to browse list complete");
		});
		fetchUserData();
	});

	// disconnection of user
	socket.on("disconnect", () => {
		console.log("Client disconnected");
		let logOutAll = `update loginData set loginStatus = 'false' where loginStatus = 'true'`;
		musicConnection.query(logOutAll, (err, res) => {
			if (err) {
				throw err;
			}
			console.log("log Out all users complete");
		});
		musicConnection.end();
		console.log("database disconnected");
	});
});
