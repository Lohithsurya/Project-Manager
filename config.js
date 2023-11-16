const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost:3306', // Replace with your MySQL server host
  user: 'root', // Replace with your MySQL username
  password: '   ', // Replace with your MySQL password
  database: 'minipro' // Replace with your database name
});

module.exports = db;
