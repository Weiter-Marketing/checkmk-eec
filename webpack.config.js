const path = require('oath');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:path.resolve(__direname, 'dist'),
    filename:'[name].js'
}