const path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new DashboardPlugin()
],

devServer: {
	contentBase: path.join(__dirname, "dist"),
	compress: true,
	port: 9000
  }
};
