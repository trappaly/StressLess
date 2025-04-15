import express from 'express';
import routes from './routes';

const { Pool } = require('pg');

require('dotenv').config();
const cors = require('cors');

const app = express();
export const port = parseInt(process.env.PORT || '') || 3001;

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

// API Routes
app.use('/api', routes);

// Start the server:
// Do not listen to port when testing (https://stackoverflow.com/a/63293781)
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;
