CREATE DATABASE database_links;

USE database_links;

--- users table 

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY(id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- movies

CREATE TABLE movies (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    image VARCHAR(150) NOT NULL,
    user_id INT(11),
    CREATED_AT TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE movies
    ADD PRIMARY KEY (id);

ALTER Table movies
    MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 2;
