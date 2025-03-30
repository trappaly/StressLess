import express, { Request, Response } from 'express';

const { Pool } = require('pg');

const dotenv = require("dotenv").config();
const cors = require("cors");

// Configuration

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  }
});

let counter = 0;


// Tracer code: Route for retrieving the "users" table from the database.
app.get("/", async (req, res) => {

  const client = await pool.connect();

  try {

    const result = await client.query("SELECT * FROM users");

    res.json(result.rows);

  } catch (errors) {
    console.log(errors);
  } finally {
    client.release();
  }
  res.status(404);

});

// Tracer code: Route for adding a user to the "users" table of the database.
app.post('/', async (req: Request, res: Response) => {
  const client = await pool.connect();

  const text = `INSERT INTO users(username, password_hash) VALUES($1, $2) RETURNING *`
  const values = ["student-" + Math.floor(Math.random() * 65536), "12345"]
  try {
    const result = await client.query(text, values);
  } catch(errors) {
    console.log(errors);
  } finally {
    client.release();
  }

  res.status(404);
});

//Start the server:
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
