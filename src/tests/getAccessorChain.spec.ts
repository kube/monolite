
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain } from '../accessorChain'

it('transforms accessor function in array of consecutive accessors', () => {
  expect(getAccessorChain(_ => _)).toEqual([])
  expect(getAccessorChain(_ => _.b)).toEqual(['b'])
  expect(getAccessorChain(_ => _.b.c)).toEqual(['b', 'c'])
})
