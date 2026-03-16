import path from 'path';
import fs from 'fs';
import resizeImage from '../utilities/imageProcessor';

describe('Test image processing utility', () => {
  it('should create a resized image file with valid inputs', async () => {
    const filename = 'fjord';
    const width = 100;
    const height = 100;
    const targetPath = path.resolve(
      `./images/thumb/${filename}_${width}x${height}_test.jpg`,
    );

    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }

    await resizeImage(filename, width, height, targetPath);

    expect(fs.existsSync(targetPath)).toBe(true);
  });

  it('should throw an error when providing negative width', async () => {
    const targetPath = path.resolve('./images/thumb/error_test.jpg');

    await expectAsync(
      resizeImage('fjord', -100, 100, targetPath),
    ).toBeRejected();
  });

  it('should throw an error when the image file does not exist', async () => {
    const targetPath = path.resolve('./images/thumb/nonexistent_test.jpg');
    await expectAsync(
      resizeImage('unknown_file', 200, 200, targetPath),
    ).toBeRejected();
  });
});
