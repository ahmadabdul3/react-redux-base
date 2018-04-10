var path = require('path');
var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');
// some comment

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
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // turn this to production to minify react
        'NODE_ENV': JSON.stringify('production'),
        'auth0Domain': JSON.stringify(process.env.auth0Domain),
        'auth0ClientId': JSON.stringify(process.env.auth0ClientId),
        'auth0RedirectUri': JSON.stringify(process.env.auth0RedirectUri),
        'auth0Audience': JSON.stringify(process.env.auth0Audience),
        'auth0ResponseType': JSON.stringify(process.env.auth0ResponseType),
        'auth0Scope': JSON.stringify(process.env.auth0Scope),
        'dataApiBaseUrl': JSON.stringify(process.env.dataApiBaseUrl),
        'frontEndServerBaseUrl': JSON.stringify(process.env.frontEndServerBaseUrl),
        'chatServerBaseUrl': JSON.stringify(process.env.chatServerBaseUrl),
        'emailServerBaseUrl': JSON.stringify(process.env.emailServerBaseUrl),
        'infoAtEmailAccountPass': JSON.stringify(process.env.infoAtEmailAccountPass),
        'apnKeyId': JSON.stringify(process.env.apnKeyId),
        'apnTeamId': JSON.stringify(process.env.apnTeamId),
        'apnP8Key': JSON.stringify(process.env.apnP8Key),
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
