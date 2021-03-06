CREATE TABLE artistData(
  artist_id INT AUTO_INCREMENT,
  artist_name VARCHAR(100) NOT NULL,
  artist_path VARCHAR(50) DEFAULT 'unknown',
  PRIMARY KEY(artist_id)
);
CREATE TABLE albumData(
  album_id INT AUTO_INCREMENT,
  album_name VARCHAR(100) NOT NULL,
  album_path VARCHAR(50) DEFAULT 'unknown',
  PRIMARY KEY(album_id)
);
CREATE TABLE playlistData(
  playlist_id INT AUTO_INCREMENT,
  playlist_name VARCHAR(100) NOT NULL,
  playlist_path VARCHAR(50) DEFAULT 'unknown',
  PRIMARY KEY(playlist_id)
);
CREATE TABLE songData(
  song_id INT AUTO_INCREMENT,
  song_name VARCHAR(100) NOT NULL,
  song_path VARCHAR(50) DEFAULT 'unknown',
  artist_id INT(50) NOT NULL,
  album_id INT(50) NOT NULL,
  playlist_id INT(50),
  duration VARCHAR(10) NOT NULL,
  likes INT(50) DEFAULT 0,
  dislikes INT(50) DEFAULT 0,
  PRIMARY KEY(song_id),
  FOREIGN KEY(artist_id) REFERENCES artistData(artist_id),
  FOREIGN KEY(album_id) REFERENCES albumData(album_id),
  FOREIGN KEY(playlist_id) REFERENCES playlistData(playlist_id)
);
CREATE TABLE recentData(
  recent_id INT AUTO_INCREMENT,
  song_name VARCHAR(100) NOT NULL,
  played_Time DATE,
  PRIMARY KEY(recent_id)
);
CREATE TABLE browseData(
  browse_id INT AUTO_INCREMENT,
  song_name VARCHAR(100) NOT NULL,
  PRIMARY KEY(browse_id)
);
CREATE TABLE user(
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR (50) NOT NULL,
  membershipStatus Varchar(5) default 'false',
  email VARCHAR (50) DEFAULT "unknown",
  password VARCHAR (20) NOT NULL,
  loginStatus VARCHAR(5) DEFAULT 'false',
  CREATETime datetime NOT NULL default NOW(),
  lastlogin datetime NOT NULL default NOW(),
  numlikes INT DEFAULT 0,
  numdislikes INT default 0,
  numfavourites INT default 0,
  verifyEmailStatus varchar(5) default 'false',
  PRIMARY KEY(user_id)
);
CREATE TABLE feedbackForm(
  feedback_id INT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL DEFAULT "unknown",
  email VARCHAR(50) not NULL DEFAULT "unknown",
  phone INT(15) DEFAULT NULL,
  message VARCHAR(100) DEFAULT "unknown",
  creationTime DATETIME NOT NULL default NOW(),
  mailStatus Varchar(5) NOT NULL default 'false',
  PRIMARY KEY(feedback_id)
);
CREATE TABLE loginData(
  login_id INT AUTO_INCREMENT,
  password VARCHAR (20) NOT NULL,
  email VARCHAR(50) DEFAULT "unknown",
  loginTime DATETIME NOT NULL default NOW(),
  loginStatus VARCHAR(5) default 'true',
  PRIMARY KEY(login_id)
);

CREATE VIEW songViewData AS
SELECT
  song_id,
  song_name,
  songData.playlist_id,
  playlist_name,
  songData.artist_id,
  artist_name,
  songData.album_id,
  album_name,
  duration,
  favourite,
  likes,
  dislikes
FROM
  songData
  INNER JOIN artistData ON songData.artist_id = artistData.artist_id
  INNER JOIN albumData ON songData.album_id = albumData.album_id
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id;
CREATE VIEW browseViewData AS
SELECT
  songData.song_id,
  songData.song_name,
  songData.playlist_id,
  playlist_name,
  songData.artist_id AS artist_id,
  artist_name,
  songData.album_id,
  album_name,
  duration,
  favourite,
  likes,
  dislikes
FROM
  songData
  INNER JOIN artistData ON songData.artist_id = artistData.artist_id
  INNER JOIN albumData ON songData.album_id = albumData.album_id
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id
  INNER JOIN browseData on songData.song_name = browseData.song_name
WHERE
  songData.song_name = browseData.song_name;
CREATE VIEW recentViewData AS
SELECT
  songData.song_id,
  songData.song_name,
  songData.playlist_id,
  playlist_name,
  songData.artist_id AS artist_id,
  artist_name,
  songData.album_id,
  album_name,
  duration,favourite,
  likes,
  dislikes,
  played_Time
FROM
  songData
  INNER JOIN artistData ON songData.artist_id = artistData.artist_id
  INNER JOIN albumData ON songData.album_id = albumData.album_id
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id
  INNER JOIN recentData on songData.song_name = recentData.song_name
WHERE
  songData.song_name = recentData.song_name;
CREATE VIEW userViewData AS
SELECT
  user_id,
  user_name,
  membershipStatus,
  email,
  loginStatus,
  lastlogin,
  numlikes,
  numdislikes,
  numfavourites
FROM
  user;
CREATE view browseSearchView as
SELECT
  song_id,
  song_name,
  songData.playlist_id,
  playlist_name,
  songData.artist_id,
  artist_name,
  songData.album_id,
  album_name,
  duration,favourite,
  likes,
  dislikes
FROM
  songData
  INNER JOIN artistData ON songData.artist_id = artistData.artist_id
  INNER JOIN albumData ON songData.album_id = albumData.album_id
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id;
CREATE view loginViewData as
SELECT
  user_name,
  membershipStatus,
  user.email,
  createTime,
  loginTime,
  verifyEmailStatus,
  loginData.loginStatus
FROM
  loginData
  INNER JOIN user
WHERE
  user.email LIKE loginData.email;
CREATE trigger toggleLoginStatus
after
insert
  ON loginData FOR EACH ROW
UPDATE
  user
SET
  user.loginStatus = new.loginStatus
WHERE
  user.email = new.email
  AND user.password = new.password;
CREATE trigger changeLoginStatus
after
UPDATE
  ON loginData FOR EACH ROW
UPDATE
  user
SET
  user.loginStatus = new.loginStatus
WHERE
  user.email = new.email
  AND user.password = new.password;

