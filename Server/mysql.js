const port = process.env.PORT || 4000;

let mysql = require("mysql");

const io = require("socket.io").listen(port, () => console.log(`Listening on port ${port}`)).sockets;

let fetchQuery = `select
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
from
  songData
  INNER JOIN artistData ON songData.artist_id = artistData.artist_id
  INNER JOIN albumData ON songData.album_id = albumData.album_id
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id`;

let insertData;
let deleteData;
let insertUser;
let logInUser;

io.on("connection", (socket) => {

    const musicConnection = mysql.createConnection({
        host: "localhost",
        user: "arb",
        password: "Arb@1606",
        database: "CompleteMusic"
    });

    const browseConnection = mysql.createConnection({
        host: "localhost",
        user: "arb",
        password: "Arb@1606",
        database: "BrowseMusic"
    });

    const userConnection = mysql.createConnection({
        host: "localhost",
        user: "arb",
        password: "Arb@1606",
        database: "User"
    });

    const fetchData = () => {
        musicConnection.query(fetchQuery, (err, res) => {
            if (err)
                throw err;
            socket.emit("MusicData", res);
        });

        browseConnection.query(fetchQuery, (err, res) => {
            if (err)
                throw err;
            socket.emit("BrowseMusicData", res);

        });
    }
    console.log("New client connected");
    socket.emit("FromAPI");

    fetchData()

    socket.on("browseRead", (data) => {
        insertData = `insert into songData (song_name,artist_id,album_id,playlist_id,duration) values (
            "${data.song_name}",
            "${data.artist_id}",
            "${data.album_id}",
            "${data.playlist_id}",
            "${data.duration}")`;
        browseConnection.query(insertData, (err, res) => {
            if (err)
                throw err;
            console.log("insert to browse complete")
            fetchData()
        });
    });

    socket.on("deleteData", (data) => {
        deleteData = `delete from songData where song_id = ${data[0]}`;

        if (data[1] == "home" || data[1] == "now") {
            musicConnection.query(deleteData, (err, res) => {
                if (err)
                    throw err;
                console.log("delete to music list complete");
            });
        } else {
            browseConnection.query(deleteData, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("delete to browse list complete");
            });
        }
        fetchData()
    })

    socket.on("signUpUser", (data) => {
        insertUser = `insert into User (user_name,membershipStatus,mail,password) values ('${data.Name}','false','${data.Email}','${data.Password}' )`;
        userConnection.query(insertData, (err, res) => {
            if (err)
                throw err;
            console.log("insert to user complete")
        });
    })

    socket.on("loginUser", (data) => {
        
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        musicConnection.end();
        browseConnection.end();
        userConnection.end();
        console.log("database disconnected")
    });

});