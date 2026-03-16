Image Processing API
A production-ready Image Processing API built with Node.js, Express, and TypeScript. This project allows users to resize images via URL parameters and implements efficient caching to optimize performance.

Features
Image Resizing: High-quality resizing using the Sharp library.
Smart Caching: Resized images are stored in the thumb directory to serve repeat requests instantly.
Code Quality: Strict adherence to ESLint and Prettier standards.
Robust Testing: Comprehensive Integration and Unit tests using Jasmine and Supertest.
Prerequisites
Node.js: Version 14.x or higher
npm: Version 6.x or higher
Getting Started
Install Dependencies:

npm install
Build the Project (Compiles TypeScript to JavaScript):

npm run build
Start the Server:

npm start
The server will be running at: http://localhost:3000

API Usage
To process an image, use the following endpoint structure: http://localhost:3000/api/images?filename=[name]&width=[number]&height=[number]

Query Parameters:
filename: The name of the image in the images/full folder (without extension).
width: The desired width in pixels (must be a positive number).
height: The desired height in pixels (must be a positive number).
Example: http://localhost:3000/api/images?filename=fjord&width=200&height=200

Available Scripts
npm run dev: Runs the server using ts-node for rapid development.
npm run test: Executes the Jasmine test suite.
npm run lint: Checks the source code for programming and style errors.
npm run format: Automatically formats the code using Prettier.
Project Structure
src/: Source code (routes, utilities, tests).
images/full/: Place original .jpg images here.
images/thumb/: Processed images will be saved here automatically.
dist/: Compiled JavaScript code (generated after build).