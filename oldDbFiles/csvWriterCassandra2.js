const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
    path: './cassandra1.csv',
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
    fieldDelimiter: ',',
    quoting : ''
});
const generateData = () =>{
    const records = [];
    for(var i = cycle; i<=cycle; i++) {
       let listing_id = i;
       let com_rating = faker.finance.amount(0, 5, 1);
       let acuracy_rating = faker.finance.amount(0, 5, 1);
       let clean_rating = faker.finance.amount(0, 5, 1);
       let checkin_rating = faker.finance.amount(0, 5, 1);
       let location_rating = faker.finance.amount(0, 5, 1);
       let value_rating = faker.random.number({min:1, max:5});
       let star_rating = faker.random.number({min:1, max:5});
       const reviews = [];
       let string = '';
       let rand = faker.random.number({min:4, max:9})
       for(var j=1; j<=rand; j++){
           let date = `${faker.date.month()} ${faker.random.number({min:2017, max:2020})}`;
           let username = faker.name.firstName();
           let text = faker.lorem.sentences(1);
           let avatar = faker.image.avatar();
           if(j === 1){
               string +=(`{${j}:{comment:'${text}',username:'${username}',avatar:'${avatar}',posting_date:'${date}'},`)
           } else if(j === rand){
               string +=(`${j}:{comment:'${text}',username:'${username}',avatar:'${avatar}',posting_date:'${date}'}}`)
           } else{
               string +=(`${j}:{comment:'${text}',username:'${username}',avatar:'${avatar}',posting_date:'${date}'},`)
           }

       }
       records.push(
           {listing_id:listing_id, com_rating:com_rating, acuracy_rating:acuracy_rating, clean_rating:clean_rating, checkin_rating:checkin_rating, location_rating:location_rating, value_rating:value_rating, star_rating:star_rating, reviews:string}
       )
    };
    return records;
}

 let cycle = 10000000;
 const generateManyRecords = () =>{
    if(cycle < 10000003){
    let data = generateData();
    csvWriter.writeRecords(data)
    .then(() => {
      cycle += 1;
      generateManyRecords();
    })
    .catch((error) => console.log('Error:', error ));
  } else {
    console.log('Records written!');
  }
};

generateManyRecords();
