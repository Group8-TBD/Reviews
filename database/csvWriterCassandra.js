const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
    path: './cassandra.csv',
    header: [
        {id:'listing_id'},
        {id: 'com_rating'},
        {id: 'acuracy_rating'},
        {id: 'clean_rating'},
        {id: 'checkin_rating'},
        {id: 'location_rating'},
        {id: 'value_rating'},
        {id: 'star_rating'},
        {id:'reviews'}
    ],
    fieldDelimiter: ';'
});
const records = [];
 for(var i = 1; i<=3; i++) {
    let listing_id = i;
    let com_rating = faker.finance.amount(0, 5, 1);
    let acuracy_rating = faker.finance.amount(0, 5, 1);
    let clean_rating = faker.finance.amount(0, 5, 1);
    let checkin_rating = faker.finance.amount(0, 5, 1);
    let location_rating = faker.finance.amount(0, 5, 1);
    let value_rating = faker.random.number({min:1, max:5});
    let star_rating = faker.random.number({min:1, max:5});
    const reviews =[]
    const string = '';
    for(var j = 1; j<=2; j++){
        let date = faker.date.month() + " 2019";
        let username = faker.name.firstName();
        let text = faker.lorem.paragraph();
        let avatar = faker.image.avatar();
        //string += 13;"{1:{comment:'re quae.',username:'Arturo',avatar:'https://s3.',posting_date:'2019-04-04'},2:{comment:'Eligendi',username:'Arturo',avatar:'https://s3',posting_date:'2019-04-04'}}"
        reviews.push(`${j}:{comment:'${text}',username:'${username}',avatar:'${avatar}',posting_date:'${date}'}`)
    }
    records.push(
        {listing_id:listing_id, com_rating:com_rating, acuracy_rating:acuracy_rating, clean_rating:clean_rating, checkin_rating:checkin_rating, location_rating:location_rating, value_rating:value_rating, star_rating:star_rating, reviews:reviews}
    )
 }
;
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
 

    // id:1,
    // review:'This is a test',
    // username: 'Shemal',
    // avata:'some url',
    // posting_date:'23'