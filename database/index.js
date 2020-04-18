//https://github.com/datastax/nodejs-driver
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1', '127.0.0.1'],
  localDataCenter:'us-west',
  keyspace: 'tbdbkeyspace'
});

const getListing = (id, callback) => {
<<<<<<< HEAD
  let randomId = Math.floor(Math.random() * 5000000);
  let query = '';
  if (id) {
    query = `SELECT * FROM listings WHERE listing_id = ${id}`;
  } else {
    query = `SELECT * FROM listings WHERE listing_id = ${randomId}`;
  }
  // let query = 'SELECT * FROM listings WHERE listing_id = 232';
 
=======
 let randomId = Math.floor(Math.random() * 5000000);
let query = '';
if(id) {
 query = `SELECT * FROM listings WHERE listing_id = ${id}`;
} else {
query = `SELECT * FROM listings WHERE listing_id = ${randomId}`;
}
 // let query = 'SELECT * FROM listings WHERE listing_id = 232';

>>>>>>> 4dc2c2f7b303b65cae3e34dbe0d8ad849279a564
  client.execute(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result.rows[0]);
    }
  });
};

const createListing = (value, callback) =>{

};

const createReview = (value, callback) =>{

};

const updateListing = (value, callback) =>{

};

const deleteListing = (value, callback) =>{

};

module.exports = {
  getListing,
  createListing,
  updateListing,
  deleteListing,
  createReview
};
//const query = 'SELECT * FROM listings WHERE listing_id = 1';

// client.execute(query)
//   .then(result => console.log('User with email', result.rows[0].reviews[2]))
//   .catch(error => console.log('error', error ))

