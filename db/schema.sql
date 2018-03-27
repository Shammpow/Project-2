-- Creates the "drinks" database --
CREATE DATABASE drinksDB;
USE drinksDB;

CREATE TABLE drinks (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    source VARCHAR(100) NOT NULL,
    ingredients TEXT,
    recipe TEXT NOT NULL,
    blurb TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
)
