require("dotenv").config();

const port = process.env.PORT || 4000;

let mysql = require("mysql");

const io = require("socket.io").listen(port).sockets;

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
		let browseData = `insert into browseData (song_name) values (
            "${data.song_name}")`;
		musicConnection.query(browseData, (err) => {
			if (err) throw err;
			fetchData();
		});
	};

	console.log("New client connected");
	socket.emit("FromAPI");

	fetchData();
	fetchUserData();

	// insert to recent data
	socket.on("recentRead", (data) => {
		let insertRecent = `insert into recentData (song_name) values (
            "${data.song_name}")`;
		musicConnection.query(insertRecent, (err) => {
			if (err) throw err;
			fetchData();
		});
	});

	// insert to signUp data
	socket.on("signUpUser", (data) => {
		let insertUser = `insert into user (user_name,membershipStatus,email,password) values ('${data.Name}','false','${data.Email}','${data.Password}' )`;
		musicConnection.query(insertUser, (err) => {
			if (err) throw err;
		});
	});

	// insert to login data
	socket.on("loginUser", (data) => {
		let logInUser = `insert into loginData (email,password) values ('${data.Email}','${data.Password}' )`;
		musicConnection.query(logInUser, (err) => {
			if (err) throw err;
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
		musicConnection.query(feedbackData, (err) => {
			if (err) throw err;
		});
	});

	// update the favourite,dislikes,likes
	socket.on("changeDetails", (data) => {
		let changeData = `update songData set ${data[0]} = ${data[2]} where song_id = ${data[1]}`;
		musicConnection.query(changeData, (err) => {
			if (err) throw err;
		});
	});

	// logOut user data
	socket.on("logoutUser", (data) => {
		let logOutUser = `update songData set ${data[0]} = ${data[1]} where song_id = ${data[2]}`;
		musicConnection.query(logOutUser, (err) => {
			if (err) throw err;
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

	// search last played songs
	socket.on("recentReceive", (data, callback) => {
		let lastPlayed = `select * from recentViewData
						where 
							played_Time <= CURDATE() - ${data}`;
		musicConnection.query(lastPlayed, (err, res) => {
			if (err) throw err;
			callback({
				musicData: res,
			});
		});
	});

	// delete to browse/ recent/ song data
	socket.on("deleteData", (data) => {
		let deleteSongData = `delete from songData where song_name = '${data[0]}'`;
		let deleteBrowseData = `delete from browseData where song_name = '${data[0]}'`;
		let deleteRecentData = `delete from recentData where song_name = '${data[0]}'`;
		if (data[1] == "home" || data[1] == "now") {
			musicConnection.query(deleteSongData, (err) => {
				if (err) throw err;
			});
		} else if (data[1] == "recent") {
			musicConnection.query(deleteRecentData, (err) => {
				if (err) {
					throw err;
				}
			});
		} else if (data[1] == "browse") {
			musicConnection.query(deleteBrowseData, (err) => {
				if (err) {
					throw err;
				}
			});
		}
		fetchData();
	});

	// delete to user data
	socket.on("deleteUser", (data) => {
		let deleteUser = `delete from user where user_id = ${data[0]}`;
		musicConnection.query(deleteUser, (err) => {
			if (err) {
				throw err;
			}
		});
		fetchUserData();
	});

	// disconnection of user
	socket.on("disconnect", () => {
		console.log("Client disconnected");
		let logOutAll = `update loginData set loginStatus = 'false' where loginStatus = 'true'`;
		musicConnection.query(logOutAll, (err) => {
			if (err) {
				throw err;
			}
			console.log("log Out all users complete");
		});
		musicConnection.end();
		console.log("database disconnected");
	});
});
