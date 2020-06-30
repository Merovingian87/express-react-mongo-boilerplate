const mongoose = require('mongoose');
const configString = require('./config.js');

const connection = mongoose.connect(`${configString}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('MongoDB Online!');
});


// Schema:
const commentsSchema = new mongoose.Schema({
  text: String,
});

module.exports = connection;