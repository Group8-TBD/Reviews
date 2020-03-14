DROP DATABASE IF EXISTS reservations;

CREATE DATABASE reservations;

USE reservations;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  avatar VARCHAR,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  com_rating INT,
  acuracy_rating INT,
  clean_rating INT,
  checkin_rating INT,
  location_rating INT,
  value_rating INT,
  star_rating INT,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(500),
  date DATE,
  user_id,
  listing_id,
  PRIMARY KEY (id)
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(listing_id) REFERENCES listings(id)
);