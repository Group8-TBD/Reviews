require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const PORT = 3500;
//const file = require('./loaderio-95ecb2fc48192d4e88d4ad016bbc71dc.txt');


/********* Middleware *********/
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/********* Routes + Controllers *********/
app.get('/api/listing/:listingID', (req, res) => {
  console.log('Received a GET request for a listing');
  console.log(req.params);
  db.getListing(req.params.listingID, (error, data) => {
    if (error) {
      console.log('Error getting listing from database: ', error);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});

app.get('/loaderio-95ecb2fc48192d4e88d4ad016bbc71dc/', (req, res) => {
  console.log('Received a GET request from loaderio');
  res.send('loaderio-95ecb2fc48192d4e88d4ad016bbc71dc')
});

app.get('/api/listing/', (req, res) => {
console.log('Received a GET request for a listing');
console.log(req.params);
  db.getListing(req.params.listingID, (error, data) => {
  if (error) {
  console.log('Error getting listing from database: ', error);
  res.sendStatus(400);
 } else {
    res.send(data);
    }
  });
});

app.post('api/createReview', (req, res) => {
  console.log('Received a POST request for reviews');
  db.createReview(req.body, (error, data) => {
    if (error) {
      console.log('Error creating a review from the database: ', error);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});


app.post('api/createListing', (req, res) => {
  console.log('Received a POST request for listings');
  db.createListing(req.body, (error, data) => {
    if (error) {
      console.log('Error creating an item from the database: ', error);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});

app.put('api/updateListing', (req, res) => {
  console.log('Received a PUT request for listings');
  db.updateListing(req.body, (error, data) => {
    if (error) {
      console.log('Error updating an item to the database: ', error);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});

app.delete('api/deleteListing', (req, res) => {
  console.log('Received a DELETE request for listings');
  db.deleteListing(req.body, (error, data) => {
    if (error) {
      console.log('Error deleting an item to the database: ', error);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  });
});

/********* Start App *********/
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
