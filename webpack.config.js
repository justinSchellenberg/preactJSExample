const path = require('path');

module.exports = {
  watch: true,
  entry: {
    BMS_Preact_Hello_World: './builds/BMS_Preact_Hello_World.js'
    //BMS_polyfills: './builds/BMS_polyfills.js',
    //BMS_dependencies: './builds/BMS_dependencies.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class',
      'react-dom-factories': 'preact-compat/lib/react-dom-factories',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../assets'),
  },
};
