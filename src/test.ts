
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import 'mocha'
import { expect } from 'chai'
import { getAccessorChain } from './accessorChain'
import { set } from './settle'

describe('getAccessorChain', () => {
  it('transforms accessor function in array of consecutive accessors', () => {
    expect(getAccessorChain(_ => _)).to.eql([])
    expect(getAccessorChain(_ => _.b)).to.eql(['b'])
    expect(getAccessorChain(_ => _.b.c)).to.eql(['b', 'c'])
  })
})

describe('set', () => {
  it('returns a new updated tree', () => {
    const tree = { b: { c: true }, d: { e: true } }
    const updatedTree = set(tree, _ => _.b.c)(false)

    expect(updatedTree).not.to.equal(tree)
    expect(tree.b.c).to.equal(true)
    expect(updatedTree.b.c).to.equal(false)
  })
})
