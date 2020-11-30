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
create TABLE recentData(
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
create TABLE browseData(
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
CREATE TABLE user(
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR (50) NOT NULL,
  membershipStatus Varchar(5) default 'false',
  email VARCHAR (50) DEFAULT "unknown",
  password VARCHAR (20) NOT NULL,
  loginStatus VARCHAR(5) DEFAULT 'false',
  createTime datetime NOT NULL default NOW(),
  lastlogin datetime NOT NULL default NOW(),
  verifyEmailStatus varc  har(5) default 'false',
  PRIMARY KEY(user_id)
);
CREATE TABLE feedbackForm(
  feedback_id int AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL  DEFAULT "unknown",
  email VARCHAR(50) not NULL DEFAULT "unknown",
  phone INT(15) DEFAULT NULL,
  message VARCHAR(100) DEFAULT "unknown",
  creationTime DATETIME NOT NULL default NOW(),
  mailStatus Varchar(5) NOT NULL default 'false',
  PRIMARY KEY(feedback_id)
);
CREATE TABLE loginData(
  login_id int AUTO_INCREMENT,
  password VARCHAR (20) NOT NULL,
  email VARCHAR(50) DEFAULT "unknown",
  loginTime DATETIME NOT NULL default NOW(),
  loginStatus VARCHAR(5) default 'true',
  PRIMARY KEY(login_id)
);
