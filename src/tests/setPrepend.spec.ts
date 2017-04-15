
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { setPrepend } from '../monolite'

it('returns a new updated tree, with item prepended to array', () => {
  const tree = { arr: [2, 3] }
  const updatedTree = setPrepend(tree, _ => _.arr)(1)

  expect(updatedTree).not.toBe(tree)
  expect(updatedTree).toHaveProperty('arr')
  expect(updatedTree.arr).toEqual([1, 2, 3])
})
