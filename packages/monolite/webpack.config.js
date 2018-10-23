
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

const BUNDLE_NAME = 'monolite'
const PROJECT_ROOT = join(__dirname, '../..')
const SOURCES_ROOT = join(__dirname, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'lib', BUNDLE_NAME)

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  target: 'web',
  mode: 'production',
  entry: join(SOURCES_ROOT, 'index.ts'),
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
      name: BUNDLE_NAME,
      removeSource: true,
      main: join(BUILD_FOLDER, 'index.d.ts'),
      out: join(BUILD_FOLDER, 'index.d.ts')
    })
  ]
}
