var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (!!err) {
    console.log('Err while connecting to datadase');
  } else {
    console.log('Connected successfully to database');
  }
});

module.exports = connection;
