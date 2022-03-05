use Notes;
CREATE TABLE IF NOT EXISTS users(
user_id INT AUTO_INCREMENT NOT NULL,
FirstName VARCHAR(255),
LasttName VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (user_id)
);
CREATE TABLE IF NOT EXISTS contacts(
user_id INT AUTO_INCREMENT NOT NULL,
user_name VARCHAR(255),
email VARCHAR(255),
message VARCHAR(255),
PRIMARY KEY (user_id)
);
CREATE TABLE IF NOT EXISTS notes(
id INT AUTO_INCREMENT NOT NULL,
user_id INT,
title VARCHAR(255),
content VARCHAR(255),
is_deleted TINYINT DEFAULT 0,
FOREIGN KEY (user_id) REFERENCES users(user_id),
PRIMARY KEY (id)
);