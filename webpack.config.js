var path = require('path');
var webpack = require('webpack');
var path = require('path');
var envConfig = require('./config/development.config.js');

module.exports = {
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
      envConfig: path.resolve(__dirname, 'config/development.config.js'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
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
      },
      'global.GENTLY': false
    })
  ],
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty',
    tls: 'empty',
    __dirname: true,
  },
};
