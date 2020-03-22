
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')

const PROJECT_ROOT = __dirname
const SOURCES_ROOT = join(__dirname, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'dist')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  target: 'node',
  mode: 'production',
  entry: join(SOURCES_ROOT, 'plugin.ts'),
  output: {
    path: BUILD_FOLDER,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
