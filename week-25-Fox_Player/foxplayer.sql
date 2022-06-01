DROP DATABASE IF EXISTS foxplayer;
CREATE DATABASE foxplayer;
USE foxplayer;

DROP TABLE IF EXISTS playlists;  
CREATE TABLE playlists (
    playlist_id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    system_rank TINYINT(1) DEFAULT 0,
    PRIMARY KEY (playlist_id)
    );
DROP TABLE IF EXISTS tracks;  
CREATE TABLE tracks (
    track_id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    duration INT,
    path VARCHAR(255) NOT NULL,
    PRIMARY KEY (track_id)
);

INSERT INTO playlists (title, system_rank)
VALUES
    ("Favorites", 1),
    ("Fox rock", 0),
    ("Driving", 0),
    ("Music for programming", 0);
    
INSERT INTO tracks (title, artist, duration )
VALUES
    ("Halahula", "United artists", 545),
    ("No sleep till Brooklyn","Beastie Boys",312.12),
    ("Not the end of the road", "Kissin Dynamite", 500),
    ("Dangerous ground", "Heat", 400);

CREATE TABLE playlists_tracks (
    playlists_id INT NOT NULL,
    tracks_id INT NOT NULL,
    PRIMARY KEY (playlists_id, tracks_id),
    FOREIGN KEY (playlists_id) REFERENCES playlists (playlist_id),
    FOREIGN KEY (tracks_id) REFERENCES tracks (track_id)
);

INSERT INTO playlists_tracks (playlists_id, tracks_id)
VALUES (1,3),(2,2),(3,1)