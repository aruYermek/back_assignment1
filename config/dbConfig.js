const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'back_ass1_db',
  password: 'mnbv',
  port: 5433,
});

module.exports = pool;
