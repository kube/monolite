
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { set } from '../monolite'

it('should accept accessor chains', () => {
  const tree = { b: { c: true }, d: { e: true } }
  const updatedTree = set(tree, ['b', 'c'])(false)

  expect(updatedTree).not.toBe(tree)
  expect(tree.b.c).toBe(true)
  expect(updatedTree.b.c).toBe(false)
})

it('returns a new updated tree', () => {
  const tree = { b: { c: true }, d: { e: true } }
  const updatedTree = set(tree, _ => _.b.c)(false)

  expect(updatedTree).not.toBe(tree)
  expect(tree.b.c).toBe(true)
  expect(updatedTree.b.c).toBe(false)
})

it('can take thunk as value', () => {
  const tree = { b: { c: true } }
  const updatedTree = set(tree, _ => _.b.c)(c => !c)

  expect(updatedTree).not.toBe(tree)
  expect(tree.b.c).toBe(true)
  expect(updatedTree.b.c).toBe(false)
})

it('returns same tree if target identity equality', () => {
  // Pass the same primitive value as replacement
  const tree = { a: { b: { c: 42 } } }
  const updatedTree = set(tree, _ => _.a.b.c)(42)
  expect(tree).toBe(updatedTree)

  // Pass the same subtree as replacement
  const tree2 = { a: { b: { c: 42 } } }
  const updatedTree2 = set(tree2, _ => _.a.b)(tree2.a.b)
  expect(tree2).toBe(updatedTree2)
})

it('returns same tree if target structural equality', () => {
  const tree = { a: { b: { c: 42 } } }
  const updatedTree = set(tree, _ => _.a.b)({ c: 42 })
  expect(tree).toBe(updatedTree)
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
  expect(updatedTree.subjects).toBeInstanceOf(Array)
  expect(updatedTree.subjects.length).toBe(2)
  expect(updatedTree.subjects[0].name).toBe('Bobby')
  expect(updatedTree.subjects[1].name).toBe('Marvin')

  const updatedTree2 = set(tree, _ => _.subjects[1].name)('Bobby')
  expect(updatedTree2.subjects).toBeInstanceOf(Array)
  expect(updatedTree2.subjects.length).toBe(2)
  expect(updatedTree2.subjects[0].name).toBe('John')
  expect(updatedTree2.subjects[1].name).toBe('Bobby')
})

it('preserves the prototype of the tree', () => {
  const tree = Object.assign(Object.create({
    a: 1, b: { c: 2 }
  }), {
    d: { e: 3 }
  })

  const updatedTree = set(tree, _ => _.d.e)(4)
  expect(updatedTree.a).toBe(1)
  expect(typeof updatedTree.b).toBe('object')
  expect(updatedTree.b).toBe(tree.b)

  const updatedTree2 = set(tree, _ => _.d.e)(3)
  expect(updatedTree2).toBe(tree)
})
