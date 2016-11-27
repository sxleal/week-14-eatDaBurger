CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

#If the table already exists, remove it before creating again
DROP TABLE IF EXISTS burgers;

#Create the burgers table
CREATE TABLE burgers(
ID INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured TINYINT DEFAULT false,
date TIMESTAMP,
PRIMARY KEY (ID)
);