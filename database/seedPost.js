const Pool = require('pg').Pool
const pool = new Pool({
    user: 'shemalshah',
    host: 'localhost',
    database: 'mydb',
    port: 5432
})

const faker = require('faker');

const listingsSeedData = () => {

    for (let i = 0; i < 500000; i++) {
      let com_rating = faker.finance.amount(0, 5, 1);
      let acuracy_rating = faker.finance.amount(0, 5, 1);
      let clean_rating = faker.finance.amount(0, 5, 1);
      let checkin_rating = faker.finance.amount(0, 5, 1);
      let location_rating = faker.finance.amount(0, 5, 1);
      let value_rating = faker.random.number({min:1, max:5});
      let star_rating = faker.random.number({min:1, max:5});

      let queryString = `INSERT INTO tbdbschema.listings (com_rating, acuracy_rating, clean_rating, checkin_rating, location_rating, value_rating, star_rating)
      VALUES (${com_rating}, ${acuracy_rating}, ${clean_rating}, ${checkin_rating}, ${location_rating}, ${value_rating}, ${star_rating})`
      pool.query(queryString, (err, data) => {
        if (err) {
          console.log('Error seeding the listing table in the database', err);
        }
      })
    };
  };

listingsSeedData();

  module.exports = {
    listingsSeedData
  }