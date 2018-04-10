var path = require('path');
var webpack = require('webpack');
var path = require('path');
var envConfig = require('./config/production.config.js');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
    ],
  },
  resolve: {
    alias: {
      srcRoot: path.resolve(__dirname, 'src'),
      envConfig: path.resolve(__dirname, 'config/production.config.js'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'auth0Domain': JSON.stringify(envConfig.auth0Domain),
        'auth0ClientId': JSON.stringify(envConfig.auth0ClientId),
        'auth0RedirectUri': JSON.stringify(envConfig.auth0RedirectUri),
        'auth0Audience': JSON.stringify(envConfig.auth0Audience),
        'auth0ResponseType': JSON.stringify(envConfig.auth0ResponseType),
        'auth0Scope': JSON.stringify(envConfig.auth0Scope),
        'dataApiBaseUrl': JSON.stringify(envConfig.dataApiBaseUrl),
        'frontEndServerBaseUrl': JSON.stringify(envConfig.frontEndServerBaseUrl),
        'chatServerBaseUrl': JSON.stringify(envConfig.chatServerBaseUrl),
        'emailServerBaseUrl': JSON.stringify(envConfig.emailServerBaseUrl),
        'infoAtEmailAccountPass': JSON.stringify(envConfig.infoAtEmailAccountPass),
        'apnKeyId': JSON.stringify(envConfig.apnKeyId),
        'apnTeamId': JSON.stringify(envConfig.apnTeamId),
        'apnP8Key': JSON.stringify(envConfig.apnP8Key),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty',
    tls: 'empty',
  },
};
