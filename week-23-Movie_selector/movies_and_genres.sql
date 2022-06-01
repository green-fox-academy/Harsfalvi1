DROP DATABASE IF EXISTS movieselector;
CREATE DATABASE movieselector;
USE movieselector;
DROP TABLE IF EXISTS genres;  
CREATE TABLE genres (id INT AUTO_INCREMENT, genre VARCHAR(252), PRIMARY KEY (id));
INSERT INTO genres (genre) VALUES ("sci-fi"), ("drama"), ("comedy");
DROP TABLE IF EXISTS movies;  
CREATE TABLE movies (id INT AUTO_INCREMENT, title VARCHAR(252), genres_id INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (genres_id) REFERENCES genres (id));
INSERT INTO movies (title, genres_id) VALUES 
("Moon",1),("2001: A Space Odyssey",1),("Contact", 1),
("Darkest Hour", 2),("There Will Be Blood", 2),("American Beauty", 2),
("Airplane!", 3),("Deadpool", 3),("Wayne's World", 3);