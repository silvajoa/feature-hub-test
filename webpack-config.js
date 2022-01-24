const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const {webpackBaseConfig} = require('./webpack-base-config');

const websiteBuildDirname = path.resolve(
  __dirname,
  './build/feature-hub/countmvc'
);

/**
 * @type {webpack.Configuration[]}
 */
const configs = [
  merge(webpackBaseConfig, {
    entry: path.join(__dirname, './Header/index.js'),
    externals: {
      react: 'react',
    },
    output: {
      path: path.join(websiteBuildDirname, 'header'),
      filename: 'feature-app-header.umd.js',
      libraryTarget: 'umd',
      publicPath: '/header',
    },
    plugins: [
      new CopyPlugin({
        patterns: [{from: path.join(__dirname, './Header/index.css')}],
      }),
    ],
  }),
  merge(webpackBaseConfig, {
    entry: path.join(__dirname, './Main/index.js'),
    externals: {
      react: 'react',
    },
    output: {
      path: path.join(websiteBuildDirname, 'main'),
      filename: 'feature-app-main.umd.js',
      libraryTarget: 'umd',
      publicPath: '/main',
    },
    plugins: [
      new CopyPlugin({
        patterns: [{from: path.join(__dirname, './Main/index.css')}],
      }),
    ],
  }),
  merge(webpackBaseConfig, {
    entry: path.join(__dirname, './integrator.js'),
    output: {
      path: websiteBuildDirname,
      filename: 'integrator.js',
      publicPath: '/',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          path.join(__dirname, './index.html'),
        ],
      }),
    ],
  }),
];

module.exports = configs;
