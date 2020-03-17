DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

USE airbnb;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  avatar VARCHAR(255)
);

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  com_rating DECIMAL(2, 1) NOT NULL,
  acuracy_rating DECIMAL(2, 1) NOT NULL,
  clean_rating DECIMAL(2, 1) NOT NULL,
  checkin_rating DECIMAL(2, 1) NOT NULL,
  location_rating DECIMAL(2, 1) NOT NULL,
  value_rating DECIMAL(2, 1) NOT NULL,
  star_rating INT NOT NULL
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(500),
  date VARCHAR(200),
  user_id INT,
  listings_id INT
);