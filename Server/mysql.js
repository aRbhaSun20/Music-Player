const port = process.env.PORT || 9050;

let mysql = require("mysql");

const io = require("socket.io").listen(port, () =>
	console.log(`Listening on port ${port}`)
).sockets;

const song = `select
    song_id,
    song_name,
    songData.playlist_id,
    playlist_name,
    songData.artist_id,
    artist_name,
    songData.album_id,
    album_name,
    duration,
    likes,
    dislikes
from songData
    INNER JOIN artistData ON songData.artist_id = artistData.artist_id
    INNER JOIN albumData ON songData.album_id = albumData.album_id
    INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id`;
const browse = `select
        song_id,
        song_name,
        browseData.playlist_id,
        playlist_name,
        browseData.artist_id,
        artist_name,
        browseData.album_id,
        album_name,
        duration,
        likes,
        dislikes
from browseData
    INNER JOIN artistData ON browseData.artist_id = artistData.artist_id
    INNER JOIN albumData ON browseData.album_id = albumData.album_id
    INNER JOIN playlistData ON browseData.playlist_id = playlistData.playlist_id `;
const recent = `select
        song_id,
        song_name,
        recentData.playlist_id,
        playlist_name,
        recentData.artist_id,
        artist_name,
        recentData.album_id,
        album_name,
        duration,
        likes,
        dislikes
from recentData
    INNER JOIN artistData ON recentData.artist_id = artistData.artist_id
    INNER JOIN albumData ON recentData.album_id = albumData.album_id
    INNER JOIN playlistData ON recentData.playlist_id = playlistData.playlist_id `;
const userfetch = `select 
		user_id,
		user_name,
		membershipStatus,
		email,
		loginStatus,
		createTime,
		verifyEmailStatus
from user`;
const feedbackfetch = `select 
feedback_id,
name,
email,
phone,
message,
creationTime,
mailStatus from feedbackForm`;
const loginData = `select 
		user_name,
		membershipStatus,
		user.email,
		createTime,
		loginTime,
		verifyEmailStatus,
		loginData.loginStatus 
from loginData  
	inner join user where user.email like loginData.email`;
const loginDetails = `select login_id,email from loginData where loginStatus like 'true'`;

io.on("connection", (socket) => {
	// db connections
	const musicConnection = mysql.createConnection({
		host: "localhost",
		user: "arb",
		password: "Arb@1606",
		database: "Oscillations",
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

		// fetch the feeedback data
		musicConnection.query(feedbackfetch, (err, res) => {
			if (err) throw err;

			socket.emit("FeedBackData", res);
		});

		// fetch the login data
		musicConnection.query(loginData, (err, res) => {
			if (err) throw err;

			socket.emit("loginData", res);
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
		let searchData = `select
                            song_id,
                            song_name,
                            songData.playlist_id,
                            playlist_name,
                            songData.artist_id,
                            artist_name,
                            songData.album_id,
                            album_name,
                            duration,
                            likes,
                            dislikes
                        from songData
                            INNER JOIN artistData ON songData.artist_id = artistData.artist_id
                            INNER JOIN albumData ON songData.album_id = albumData.album_id
                            INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id
                        where 
                            song_name like '%${data}%' or
                            artist like '%${data}%' or
                            album_name like '%${data}%' or
                            playlist_name like '%${data}%' `;

		let inserData = `select
                            song_id,
                            song_name,
                            songData.playlist_id,
                            playlist_name,
                            songData.artist_id,
                            artist_name,
                            songData.album_id,
                            album_name,
                            duration,
                            likes,
                            dislikes
                        from songData
                            INNER JOIN artistData ON songData.artist_id = artistData.artist_id
                            INNER JOIN albumData ON songData.album_id = albumData.album_id
                            INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id
                        where 
                            song_name like '${data}' or
                            artist like '${data}' or
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
