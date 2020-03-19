const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const PORT = 3500;

/********* Middleware *********/
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/********* Routes + Controllers *********/
app.get('/api/listing', (req, res) => {
  console.log('Received a GET request for a listing');
  db.getListing(req, (error, data) => {
    if (error) {
      console.log('Error getting listing from database: ', error);
      res.status(400);
    }
    else {
      res.status(200);
      res.send(data);
    }
  })
});
app.get('/api/reviews', (req, res) => {
  console.log('Received a GET request for reviews');
  db.getReviews(req, (error, data) => {
    if (error) {
      console.log('Error getting reviews from the database: ', error);
      res.status(400);
    }
    else {
      res.status(200);
      res.send(data);
    }
  })
});
app.get('/api/user', (req, res) => {
  console.log('Received a GET request for a user');
  db.getUser(req, (error, data) => {
    if (error) {
      console.log('Error getting user from the database: ', error);
      res.status(400);
    }
    else {
      res.status(200);
      res.send(data);
    }
  })
})

app.post('api/reviews', (req, res) => {
  console.log('Received a POST request');
});

/********* Start App *********/
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
