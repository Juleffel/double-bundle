const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'resources', 'public', 'js');
const APP_DIR = path.resolve(__dirname, 'src', 'js');

const config = {
  entry: './library.js',
  output: {
    path: BUILD_DIR,
    filename: 'npm-bundle.js'
  },
};

module.exports = config;