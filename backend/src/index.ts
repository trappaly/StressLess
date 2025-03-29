import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// example counter
let counter = 0;

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
