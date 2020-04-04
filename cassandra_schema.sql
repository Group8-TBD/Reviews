CREATE KEYSPACE IF NOT EXISTS tbdbKeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor':3};

USE tbdbKeyspace;

CREATE TABLE IF NOT EXISTS listings(
 listing_id INT,
 com_rating text,
 acuracy_rating Decimal,
 clean_rating Decimal,
 checkin_rating Decimal,
 location_rating Decimal,
 value_rating INT,
 star_rating INT,
 review_id INT,
 review_comment text,
 review_date date,
 review_username text,
 review_avatar text,
 PRIMARY KEY (listing_id, review_date)
});
-----------Different SCHEMA-------------
CREATE KEYSPACE IF NOT EXISTS tbdbKeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor':1};

USE tbdbKeyspace;

CREATE TYPE IF NOT EXISTS review
(
   comment text,
   username varchar,
   avatar text,
   posting_date date
);

CREATE TABLE IF NOT EXISTS listings(
 listing_id INT PRIMARY KEY,
 com_rating DECIMAL,
 accuracy_rating DECIMAL,
 clean_rating DECIMAL,
 checkin_rating DECIMAL,
 location_rating DECIMAL,
 value_rating INT,
 star_rating INT,
 reviews map <int, frozen < review > >
);   



listing_id| com_rating| accuracy_rating| clean_rating| checkin_rating| location_rating| value_rating| star_rating| reviews
2| 2.3| 4.3| 3.4| 4.5| 3.4| 4| 5|{2:{comment:'test',username: 'Shemal',avatar:'some other url',posting_date:'33'}}

-- TO insert a new listing:

insert into listings(listing_id,reviews) values (2, {2:{comment:'This is a another test',username: 'Shemalshah',
avatar:'some other url',posting_date:'33' }});

insert into listings(listing_id, com_rating, accuracy_rating, clean_rating, checkin_rating, location_rating, value_rating, star_rating, reviews
) values(
   12, 2.3, 4.3, 3.4, 4.5, 3.4, 4, 5, {1:{comment:'test',username: 'Shemal',avatar:'some other url',posting_date:'33'},2:{comment:'test',username: 'Shemal',avatar:'some other url',posting_date:'33'}}
)

--Overall DB Structure for Cassandra
--    Database
--     KEYSPACE [name]
--      Table/ Columns [name]
--       FIELDS[id, name, email]

--To import data from csv run the following command
--     COPY keyspace.tablename FROM 'PATH' WITH DELIMITER='|' AND HEADER=TRUE;


 COPY tbdbkeyspace.listings(listing_id, com_rating, accuracy_rating, clean_rating, checkin_rating, location_rating, value_rating, star_rating, reviews) FROM '/Users/shemalshah/Desktop/HR/SDC/id.csv' WITH DELIMITER='|' AND HEADER=TRUE ;

COPY tbdbkeyspace.listings(listing_id,reviews) from '/Users/shemalshah/Desktop/HR/SDC/Reviews/database/cassandra.csv' WITH DELIMITER=';' AND HEADER=TRUE ;
  COPY tbdbkeyspace.listings(listing_id, com_rating, accuracy_rating, clean_rating, checkin_rating, location_rating, value_rating, star_rating) FROM '/Users/shemalshah/Desktop/HR/SDC/Reviews/database/cassandra.csv' WITH DELIMITER=';' AND HEADER=TRUE ;



  -- This worked -- 13;"{1:{comment:'re quae.',username:'Arturo',avatar:'https://s3.',posting_date:'2019-04-04'},2:{comment:'Eligendi',username:'Arturo',avatar:'https://s3',posting_date:'2019-04-04'}}"