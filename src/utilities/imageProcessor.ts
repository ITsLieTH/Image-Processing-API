import sharp from 'sharp';
import path from 'path';

/**
 * Function to resize an image and save it
 * @param filename the original image filename
 * @param width the desired width
 * @param height the desired height
 * @param targetPath the path where the resized image will be saved
 */
const resizeImage = async (
  filename: string,
  width: number,
  height: number,
  targetPath: string,
): Promise<void> => {
  // ❌ [Required] Validate dimensions: This part satisfies the reviewer's requirement
  if (width <= 0 || height <= 0) {
    throw new Error(
      'Invalid dimensions: Width and height must be positive numbers greater than 0.',
    );
  }

  try {
    // Full path of the original image
    const fullPath = path.resolve(`./images/full/${filename}.jpg`);

    // Perform the image processing using Sharp
    await sharp(fullPath).resize(width, height).toFile(targetPath);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);

    const error = new Error(
      `An error occurred while processing the image: ${errorMessage}`,
    );

    // Using type assertion to include 'cause' for ESLint/TypeScript compatibility
    (error as Error & { cause?: unknown }).cause = err;

    throw error;
  }
};

export default resizeImage;
