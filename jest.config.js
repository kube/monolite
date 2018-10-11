
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * @type {jest.InitialOptions}
 */
module.exports = {
  transform: {
    '.ts': require.resolve('ts-jest/preprocessor.js')
  },
  testRegex: '\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'js']
}
