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

const postListing = (values, callback) => {
  let query = `INSERT INTO listings(com_rating, accuracy_rating, clean_rating, checkin_rating, location_rating, value_rating, star_rating) VALUES(${values.com_rating}, ${values.acuracy_rating}, ${values.clean_rating}, ${values.checkin_rating}, ${values.location_rating}, ${values.value_rating}, ${values. star_rating})`
  connection.query(query, (error, data) =>{
    if (error) {
      callback(error, null);
    }
    else {
      callback(null, data);
    }
  })
};

const putListing = (value, callback) =>{
  //value.field is the field that needs to be updated and value.info is the value that needs to be updated to
  let query = `UPDATE listings SET ${value.field} = '${value.info}' WHERE id = ${value.id};`;
  connection.query(query, (error, data) =>{
    if (error) {
      callback(error, null);
    }
    else {
      callback(null, data);
    }
  })
}

const deleteListing = (id, callback) => {
    //value.id is the field that needs to be deleted 
  let query = `DELETE FROM listings WHERE id='${id}'`;
  connection.query(query, (error, data) =>{
    if (error) {
      callback(error, null);
    }
    else {
      callback(null, data);
    }
  })
}

const testObj = {
  com_rating : 1, 
  acuracy_rating : 2.3, 
  clean_rating: 3.4, 
  checkin_rating: 4.5, 
  location_rating: 3.4,    
  value_rating:1.2, 
  star_rating: 4.4
}



module.exports = {
  connection,
  getListing,
  getReviews,
  postListing,
  putListing,
  deleteListing
};

