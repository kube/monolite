
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { setMap } from '../monolite'

it('return a new update tree, with modifications in an array ', () => {
  const tree = { b: false, c: [true, true] }
  const updatedTree = setMap(tree, _ => _.c)(value => !value)

  expect(updatedTree).not.toBe(tree)
  expect(updatedTree).toHaveProperty('c')
  expect(updatedTree.c).toEqual([false, false])
})
