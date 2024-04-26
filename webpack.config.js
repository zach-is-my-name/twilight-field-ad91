// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.ts', // Path to your entry file, update as necessary
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output file
  },
  resolve: {
    alias: {
      'crypto': path.resolve(__dirname, './src/crypto-shim.js'),
    }
  },
  mode: 'production', // 'development' for development builds
};

