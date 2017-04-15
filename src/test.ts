
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
import { set, setMap, setAppend, setPrepend, setFilter } from './monolite'

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

  it('can take thunk as value', () => {
    const tree = { b: { c: true } }
    const updatedTree = set(tree, _ => _.b.c)(c => !c)

    expect(updatedTree).not.to.equal(tree)
    expect(tree.b.c).to.equal(true)
    expect(updatedTree.b.c).to.equal(false)
  })

  it('returns same tree if target identity equality', () => {
    // Pass the same primitive value as replacement
    const tree = { a: { b: { c: 42 } } }
    const updatedTree = set(tree, _ => _.a.b.c)(42)
    expect(tree).to.equal(updatedTree)

    // Pass the same subtree as replacement
    const tree2 = { a: { b: { c: 42 } } }
    const updatedTree2 = set(tree2, _ => _.a.b)(tree2.a.b)
    expect(tree2).to.equal(updatedTree2)
  })

  it('returns same tree if target structural equality', () => {
    const tree = { a: { b: { c: 42 } } }
    const updatedTree = set(tree, _ => _.a.b)({ c: 42 })
    expect(tree).to.equal(updatedTree)
  })

  it('does not transform arrays to objects', () => {
    const tree = {
      title: 'Hello',
      subjects: [
        { name: 'John', age: 26 },
        { name: 'Marvin', age: 42 }
      ]
    }
    const updatedTree = set(tree, _ => _.subjects[0].name)('Bobby')
    expect(updatedTree.subjects).to.be.an('array')
    expect(updatedTree.subjects.length).to.equal(2)
    expect(updatedTree.subjects[0].name).to.equal('Bobby')
    expect(updatedTree.subjects[1].name).to.equal('Marvin')

    const updatedTree2 = set(tree, _ => _.subjects[1].name)('Bobby')
    expect(updatedTree2.subjects).to.be.an('array')
    expect(updatedTree2.subjects.length).to.equal(2)
    expect(updatedTree2.subjects[0].name).to.equal('John')
    expect(updatedTree2.subjects[1].name).to.equal('Bobby')
  })
})

describe('setMap', () => {
  it('return a new update tree, with modifications in an array ', () => {
    const tree = { b: false, c: [true, true] }
    const updatedTree = setMap(tree, _ => _.c)(value => !value)

    expect(updatedTree).not.to.eql(tree)
    expect(updatedTree).to.have.property('c')
      .that.is.an('array')
      .to.be.eql([false, false])
  })
})

describe('setAppend', () => {
  it('returns a new updated tree, with item appended to array', () => {
    const tree = { arr: [1, 2] }
    const updatedTree = setAppend(tree, _ => _.arr)(3)

    expect(updatedTree).not.to.eql(tree)
    expect(updatedTree).to.have.property('arr')
      .that.is.an('array')
      .to.be.eql([1, 2, 3])
  })
})

describe('setPrepend', () => {
  it('returns a new updated tree, with item prepended to array', () => {
    const tree = { arr: [2, 3] }
    const updatedTree = setPrepend(tree, _ => _.arr)(1)

    expect(updatedTree).not.to.eql(tree)
    expect(updatedTree).to.have.property('arr')
      .that.is.an('array')
      .to.be.eql([1, 2, 3])
  })
})

describe('setFilter', () => {
  it('returns a new filtered array', () => {
    const tree = { arr: [1, 2, 3, 4, 5, 6, 7] }
    const updatedTree = setFilter(tree, _ => _.arr)(x => x % 2 === 0)

    expect(updatedTree.arr).to.eql([2, 4, 6])
  })
})
