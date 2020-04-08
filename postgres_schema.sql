DROP SCHEMA IF EXISTS tbdb;

CREATE SCHEMA tbdb;

CREATE TABLE tbdbschema.listings(
  listing_id SERIAL PRIMARY KEY,
  com_rating DECIMAL(2, 1) NOT NULL,
  acuracy_rating DECIMAL(2, 1) NOT NULL,
  clean_rating DECIMAL(2, 1) NOT NULL,
  checkin_rating DECIMAL(2, 1) NOT NULL,
  location_rating DECIMAL(2, 1) NOT NULL,
  value_rating DECIMAL(2, 1) NOT NULL,
  star_rating SMALLINT NOT NULL
);

CREATE TABLE tbdbschema.reviews(
  review_id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL,
  user_id INT NOT NULL,
  text VARCHAR(500) NOT NULL,
  posting_date VARCHAR(50) NOT NULL,
  --reviews_listing_id_fkey
  FOREIGN KEY (listing_id) REFERENCES tbdbschema.listings(listing_id),
  --reviews_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES tbdbschema.users(user_id)
);

CREATE TABLE tbdbschema.users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  avatar VARCHAR(255)
)

--Get all the reviews with listing id 1

-- Run the following command to create the schema and tables
--    psql -d mydb -a -f postgres_schema.sql
-- Run the following command to copy data from CSV
--    COPY tbdbschema.listings FROM '/Users/shemalshah/Desktop/HR/SDC/Reviews/database/test.csv'  WITH (HEADER, FORMAT csv);

