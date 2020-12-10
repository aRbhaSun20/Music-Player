CREATE  TABLE  User(
user_id INT  AUTO_INCREMENT ,
user_name VARCHAR (50) NOT  NULL,
membershipStatus Varchar(5) default 'false',
mail VARCHAR (50) NOT  NULL,
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
    creationTime DATETIME  NOT NULL default NOW(),
    mailsentStatus Varchar(5) default 'false',
    PRIMARY KEY(feedback_id)
); 