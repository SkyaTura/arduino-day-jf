// THIS FILE IS ONLY FOR IDE HELPER, IT DOESN'T AFFECT THE PROJECT

const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname),
    },
  },
}
