const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
});

const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = { query };
