const webpack = require('webpack');
const config = require('./webpack.config');

config.entry = "src/index.js"
config.output.path = path.resolve('dist');
config.output.filename = "[name].min.js";
config.output.publicPath = "";
config.devtool = "source-map";
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks (module) {
        return module.context && module.context.includes('node_modules');
    },
}));
config.plugins.push(new webpack.optimize.UglifyJsPlugin());
config.plugins.push(new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' }}));

module.exports = config;
