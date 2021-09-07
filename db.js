const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres', // юзер для подключения к db
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres',
});

module.exports = pool;
