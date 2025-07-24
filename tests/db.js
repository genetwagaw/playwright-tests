// db.js
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
  port: 5432,
});

module.exports = client;
