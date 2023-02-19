import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = 8000;
let count = 0;

app.get('/', (req: Request, res: Response) => {
  count += 1;
  console.log(`IP: ${req.ip} server hits: ${count} time.`);

  res.status(200).json({ msg: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`TS: server is running on port! ${PORT}.`);
});
