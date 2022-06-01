DROP DATABASE IF EXISTS todo_app;
CREATE DATABASE todo_app;
USE todo_app;
DROP TABLE IF EXISTS todos;  
CREATE TABLE todos (
    id INT AUTO_INCREMENT NOT NULL, 
    completed BOOLEAN DEFAULT false,
    text VARCHAR(100) NOT NULL, 
    PRIMARY KEY (id));

INSERT INTO todos (text)
VALUES
    ("Buy milk"),
    ("Save the world"),
    ("Make dinner");