import express, { Request, Response } from 'express';

const { Pool } = require('pg');

const dotenv = require('dotenv').config();
const cors = require('cors');

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
  },
});

let counter = 0;

app.get('/', async (req, res) => {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM users');

    res.json(result.rows);
  } catch (errors) {
    console.log(errors);
  } finally {
    client.release();
  }
  res.status(404);
});

// //Define route
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, World! Counter = ' + counter);
// });
app.post('/', (req: Request, res: Response) => {
  counter++;
  res.send(200);
});

//Start the server:
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
