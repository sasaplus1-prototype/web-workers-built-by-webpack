'use strict';

const path = require('path');

module.exports = {

  context: __dirname,

  target: 'web',

  entry: {
    'index': `${__dirname}/src/index.js`
  },

  output: {
    path: __dirname,
    publicPath: './',
    filename: '[name].js',
    chunkFilename: 'chunk-[id]-[hash].js',
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.worker\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              fallback: false,  // don't output file
              inline: true,     // use Blob
            },
          },
        ],
      },
    ],
  },

  node: {
    Buffer: false,
    process: false,
  },

  resolve: {
    extensions: [
      '.worker.js',
      '.js',
    ],
  },

};
