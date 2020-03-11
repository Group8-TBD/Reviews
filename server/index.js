const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const PORT = 3500;

/********* Middleware *********/
app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());

/********* Routes + Controllers *********/
app.get('api/reviews', (req, res) => {
  console.log('Received a GET request');
});

app.post('api/reviews', (req, res) => {
  console.log('Received a POST request');
});

/********* Start App *********/
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
