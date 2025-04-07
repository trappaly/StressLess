import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Creating a connection to the Postdegree SQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
