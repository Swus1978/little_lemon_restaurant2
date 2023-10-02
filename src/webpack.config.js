const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other configurations
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // path to your HTML template
    }),
    // ... other plugins
  ],
};

