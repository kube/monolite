
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')

const BUNDLE_NAME = 'babel'
const PROJECT_ROOT = join(__dirname, '../..')
const SOURCES_ROOT = join(__dirname, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'plugin', BUNDLE_NAME)

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  target: 'node',
  mode: 'production',
  entry: join(SOURCES_ROOT, 'plugin.ts'),
  output: {
    path: BUILD_FOLDER,
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
