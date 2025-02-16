import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;
//Define route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
  });
//Start the server:
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });