const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assignment_1',
  password: 'mnbv',
  port: 5433,
});

module.exports = pool;
