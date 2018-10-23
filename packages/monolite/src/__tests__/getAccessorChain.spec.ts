
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
  expect(getAccessorChain(_ => _['b']['c'])).toEqual(['b', 'c'])
})

it('accepts identifiers', () => {
  const a = '13'
  const b = '42'

  expect(getAccessorChain(_ => _[a])).toEqual([a])
  expect(getAccessorChain(_ => _[a][b])).toEqual([a, b])
})
