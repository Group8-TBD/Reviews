const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

//-------------------------------Listings-------------------------------
// const csvWriter = createCsvWriter({
//     path: './test.csv',
//     header: [
//         {id:'listing_id'},
//         {id: 'com_rating'},
//         {id: 'acuracy_rating'},
//         {id: 'clean_rating'},
//         {id: 'checkin_rating'},
//         {id: 'location_rating'},
//         {id: 'value_rating'},
//         {id: 'star_rating'}
//     ]
// });
// const listings = [];
//  for(var i = 1; i<=10000000; i++) {
//     let listing_id = i;
//     let com_rating = faker.finance.amount(0, 5, 1);
//     let acuracy_rating = faker.finance.amount(0, 5, 1);
//     let clean_rating = faker.finance.amount(0, 5, 1);
//     let checkin_rating = faker.finance.amount(0, 5, 1);
//     let location_rating = faker.finance.amount(0, 5, 1);
//     let value_rating = faker.random.number({min:1, max:5});
//     let star_rating = faker.random.number({min:1, max:5});
//     listings.push(
//         {listing_id:listing_id, com_rating:com_rating, acuracy_rating:acuracy_rating, clean_rating:clean_rating, checkin_rating:checkin_rating, location_rating:location_rating, value_rating:value_rating, star_rating:star_rating}
//     )
//  };
//-------------------------------Reviews-------------------------------
const csvWriter = createCsvWriter({
    path: './test2.csv',
    header: [
        {id:'review_id'},
        {id: 'listing_id'},
        {id: 'user_id'},
        {id: 'text'},
        {id: 'posting_date'}
    ]
});

 const reviews = [];
 for (var i = 11000001; i <= 15000000; i++){
    let review_id = i;
    let listing_id = faker.random.number({min:1, max:10000000});
    let user_id = faker.random.number({min:1, max:500000});
    let text = faker.lorem.sentences(3);
    let date = `${faker.date.month()} ${faker.random.number({min:2017, max:2020})}`
    reviews.push({
        review_id : review_id, listing_id:listing_id, user_id: user_id, text: text, posting_date:date
    });
 }

//-------------------------------Users-------------------------------
//  const csvWriter = createCsvWriter({
//     path: './test.csv',
//     header: [
//         {id:'user_id'},
//         {id: 'username'},
//         {id: 'avatar'}
//     ]
// });

//  const users = [];
//  for (var i = 1; i <= 500000; i++){
//     let user = i;
//     let username = faker.name.firstName();
//     let avatar = faker.image.avatar();
//     users.push({
//         user_id:user, username:username, avatar:avatar
//     });
//  }

//-----------------------------Function to run-------------------------------
// Function can be run with the following command to increase the old space mem
//node --max-old-space-size=4096 yourFile.js

csvWriter.writeRecords(reviews)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
 