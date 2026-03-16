import express from 'express';
import fs from 'fs';
import path from 'path';
import resizeImage from '../utilities/imageProcessor';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const filename = req.query.filename as string;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    // missing filename
    if (!filename) {
      return res.status(400).send('Missing filename parameter');
    }

    // missing width or height
    if (!width || !height) {
      return res.status(400).send('Width and height are required');
    }

    // invalid width height
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      return res.status(400).send('Width and height must be positive numbers');
    }

    const inputPath = path.resolve(`images/full/${filename}.jpg`);

    if (!fs.existsSync(inputPath)) {
      return res.status(404).send('Image not found');
    }

    const outputPath = path.resolve(
      `images/thumb/${filename}_${width}_${height}.jpg`,
    );
    await resizeImage(filename, width, height, outputPath);

    res.sendFile(outputPath);
  } catch (error) {
    next(error); // Express catches this
  }
});

export default router;
