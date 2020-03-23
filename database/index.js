const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to the database: ', error);
  }
  console.log('Connected to the database!');
});

const getListing = (value, callback) => {

  let randomId = Math.floor(Math.random() * 100);
  let queryString = `SELECT * FROM listings WHERE id = '${randomId}'`;
  connection.query(queryString, (error, data) => {
    if (error) {
      callback(error, null);
    }
    else {
      callback(null, data);
    }
  })
};
const getReviews = (value, callback) => {

  let reviewRow = Math.floor(Math.random() * 100);
  // let numReviews = Math.floor(Math.random() * 8) + 2;
  let numReviews = 6;
  let queryString = `SELECT * FROM reviews LIMIT ${reviewRow}, ${numReviews}`;
  connection.query(queryString, (error, data) => {
    if (error) {
      callback(error, null);
    }
    else {
      callback(null, data);
    }
  })
};

module.exports = {
  connection,
  getListing,
  getReviews
};

