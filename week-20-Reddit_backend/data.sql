create database reddit;
use reddit;
CREATE TABLE posts (id int auto_increment, title varchar(120), url varchar(260),timestamp bigint, score int default 0, primary key (id));
USE reddit;
SHOW tables;
insert into posts (title, url, timestamp)
values ("first post", "https://aurora.hu/", 1649411923), ("second post", "https://orlandosbar.business.site/",1649412014), ("third post", "http://dolcevitaetterem.hu/", 1649412132);
select * from posts;