
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { setFilter } from '../monolite'

it('returns a new filtered array', () => {
  const tree = { arr: [1, 2, 3, 4, 5, 6, 7] }
  const updatedTree = setFilter(tree, _ => _.arr)(x => x % 2 === 0)

  expect(updatedTree.arr).toEqual([2, 4, 6])
})
