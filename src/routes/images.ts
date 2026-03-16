import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import resizeImage from '../utilities/imageProcessor';

const router = express.Router();

router.get(
  '/',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filename = req.query.filename as string;
      const width: number = Number(req.query.width);
      const height: number = Number(req.query.height);

      if (!filename) {
        res.status(400).send('Missing filename parameter');
        return;
      }

      if (!width || !height) {
        res.status(400).send('Width and height are required');
        return;
      }

      if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        res.status(400).send('Width and height must be positive numbers');
        return;
      }

      const inputPath = path.resolve(`images/full/${filename}.jpg`);

      if (!fs.existsSync(inputPath)) {
        res.status(404).send('Image not found');
        return;
      }

      const outputPath = path.resolve(
        `images/thumb/${filename}_${width}_${height}.jpg`,
      );

      if (fs.existsSync(outputPath)) {
        res.sendFile(outputPath);
        return;
      }

      await resizeImage(filename, width, height, outputPath);

      res.sendFile(outputPath);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
