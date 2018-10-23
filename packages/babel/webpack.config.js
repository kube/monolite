
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
const PACKAGES_ROOT = join(PROJECT_ROOT, 'packages')
const SOURCES_ROOT = join(PACKAGES_ROOT, BUNDLE_NAME, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'lib', BUNDLE_NAME)

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
