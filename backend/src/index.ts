import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
// Enable CORS for all origins
app.use(cors());

// example counter
let counter = 0;
const port = process.env.PORT || 3001;
//Define route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! Counter = ' + counter);
});
app.post('/', (req: Request, res: Response) => {
  counter++;
  res.send(200);
})

//Start the server:
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
