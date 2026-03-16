import express, { Request, Response } from 'express';
import images from './routes/images';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Image API working');
});

app.use('/api/images', images);

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
