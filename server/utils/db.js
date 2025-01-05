const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  database: "",
  host: "",
  user: "",
  password: "",
  port: "",
});


export const query = (text,params) => pool.query(text,params);