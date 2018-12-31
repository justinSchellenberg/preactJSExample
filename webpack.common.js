const path = require('path');

module.exports = {
  entry: {
    // BMSPolyfills: './polyfills/polyfills.js', // IF YOU REQUIRE POLYFILLS, uncomment and gt file location for more information
    BMS_Preact_Hello_World: './builds/BMS_Preact_Hello_World.js'
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
