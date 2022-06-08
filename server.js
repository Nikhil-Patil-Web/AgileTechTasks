const MongoClient = require('mongoDB').MongoClient;
const dotenv = require('dotenv');

dotenv.config({ path:'./config.env' });

// const express = require('express');
// const app = express();

const app = require('./app');

const { trace } = require('./app');

console.log(app.get('env'));

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

const client = new MongoClient(DB);

client
  .connect(() => {
    console.log('DB has been Connected!');
  });

const port = 6500;
app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
console.log(client.db("TrialDB").collection('events'));
module.exports =client;
//SAVE