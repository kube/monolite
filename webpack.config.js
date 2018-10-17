
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')
const DefinitionBundlePlugin = require('dts-bundle-webpack')

const PROJECT_ROOT = __dirname
const SOURCES_ROOT = join(PROJECT_ROOT, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'lib')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'production',
  context: SOURCES_ROOT,
  entry: './index.ts',
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
    extensions: ['.ts']
  },
  plugins: [
    new DefinitionBundlePlugin({
      name: 'monolite',
      removeSource: true,
      main: join(BUILD_FOLDER, 'index.d.ts'),
      out: join(BUILD_FOLDER, 'index.d.ts')
    })
  ]
}
