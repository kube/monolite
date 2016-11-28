
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
import { set, setMap } from './monolite'

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

  it('can take function as value', () => {
    const tree = { b: { c: true } }
    const updatedTree = set(tree, _ => _.b.c)(c => !c)

    expect(updatedTree).not.to.equal(tree)
    expect(tree.b.c).to.equal(true)
    expect(updatedTree.b.c).to.equal(false)
  })
})

describe('setMap', () => {
  it('return a new update tree, with modifications in an array ', () => {
    const tree = {b: false, c: [true, true]}
    const updatedTree = setMap(tree, _ => _.c)(value => !value)

    expect(updatedTree).not.to.eql(tree)
    expect(updatedTree).to.have.property('c')
      .that.is.an('array')
        .to.be.eql([false, false])
  })
})
