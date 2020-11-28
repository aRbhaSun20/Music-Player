create TABLE artistData(
  artist_id INT AUTO_INCREMENT,
  artist_name VARCHAR(100) NOT NULL,
  artist_path VARCHAR(50) DEFAULT 'unknown',
  PRIMARY KEY(artist_id)
);
create TABLE albumData(
  album_id INT AUTO_INCREMENT,
  album_name VARCHAR(100) NOT NULL,
  album_path VARCHAR(50) DEFAULT 'unknown',
  PRIMARY KEY(album_id)
);
create TABLE playlistData(
  playlist_id INT AUTO_INCREMENT,
  playlist_name VARCHAR(100) NOT NULL,
  playlist_path VARCHAR(50) DEFAULT 'unknown',
  PRIMARY KEY(playlist_id)
);
create TABLE songData(
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
CREATE TABLE User(
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR (50) NOT NULL,
  membershipStatus Varchar(5) default 'false',
  mail VARCHAR (50) NOT NULL,
  password VARCHAR (20) NOT NULL,
  loginStatus VARCHAR(5) DEFAULT 'false',
  createTime datetime NOT NULL default NOW(),
  lastlogin datetime NOT NULL default NOW(),
  verifyEmailStatus varchar(5) default 'false',
  PRIMARY KEY(user_id)
);
CREATE TABLE FeedbackForm(
  feedback_id int AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT "unknown",
  email VARCHAR(50) DEFAULT "unknown",
  phone INT(15) DEFAULT NULL,
  message VARCHAR(100) DEFAULT "unknown",
  creationTime DATETIME NOT NULL default NOW(),
  mailsentStatus Varchar(5) default 'false',
  PRIMARY KEY(feedback_id)
);

select
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
  INNER JOIN playlistData ON songData.playlist_id = playlistData.playlist_id;