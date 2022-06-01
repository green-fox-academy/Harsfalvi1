DROP DATABASE IF EXISTS profiles;
CREATE DATABASE profiles;
USE profiles;
DROP TABLE IF EXISTS likes;  
DROP TABLE IF EXISTS users;  
CREATE TABLE users (
    username VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    birth_year SMALLINT(4) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    target_gender VARCHAR(255) NOT NULL, 
    self_description VARCHAR(1023) NOT NULL,
    profile_picture_url VARCHAR(252) NOT NULL,
    UNIQUE (username),
    PRIMARY KEY (username));

CREATE TABLE likes (
    id INT AUTO_INCREMENT,
    source_username VARCHAR(255) NOT NULL,
    target_username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (source_username) REFERENCES users(username),
    FOREIGN KEY (target_username) REFERENCES users(username)
)
    