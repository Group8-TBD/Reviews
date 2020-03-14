const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const usersSeedData = () => {

  let randomIndex = Math.floor(Math.random() * array.length);
  let namesArray = ['Susan', 'Ben', 'Prat', 'Gilbert', 'Bertha', 'Josh', 'John', 'Paul', 'Kyle', 'Kylie', 'Kendal', 'Kate', 'David', 'Austin', 'Andrew', 'Andres', 'Bob', 'Bert', 'Billy', 'Elizabeth', 'Bernie'];
  let name = namesArray[randomIndex];
  let avatar = 'http://allcrazycats.com'
  let queryString = `INSERT INTO users (name, avatar) VALUES (${name}, ${avatar})`
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('Error seeing the user table in the database');
    }
  })
};

const listingsSeedData = () => {
  for (let i = 0; i < 100; i++) {
    let com_rating =
      let acuracy_rating =
        let clean_rating =
        let checkin_rating =
        let location_rating =
        let value_rating =
        let star_rating =


        let queryString = `INSERT INTO listings () VALUES ()`
    connection.query(queryString, (err, data) => {
      if (err) {
        console.log('Error seeing the listing table in the database');
      }
    })
  }
};




const reviewsSeedData = () => {

  let queryString =
    connection.query(queryString, (err, data) => {
      if (err) {
        console.log('Error seeing the reviews table in the database');
      }
    })
};

module.exports = {
  usersSeedData,
  listingsSeedData,
  reviewsSeedData
}
