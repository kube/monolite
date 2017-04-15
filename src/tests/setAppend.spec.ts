
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { setAppend } from '../monolite'

it('returns a new updated tree, with item appended to array', () => {
  const tree = { arr: [1, 2] }
  const updatedTree = setAppend(tree, _ => _.arr)(3)

  expect(updatedTree).not.toBe(tree)
  expect(updatedTree).toHaveProperty('arr')
  expect(updatedTree.arr).toEqual([1, 2, 3])
})
