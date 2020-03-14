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
  com_rating DECIMAL(2, 1),
  acuracy_rating DECIMAL(2, 1),
  clean_rating DECIMAL(2, 1),
  checkin_rating DECIMAL(2, 1),
  location_rating DECIMAL(2, 1),
  value_rating DECIMAL(2, 1),
  star_rating INT,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(500),
  date VARCHAR,
  user_id,
  listings_id,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(listings_id) REFERENCES listings(id),
  PRIMARY KEY (id)
);