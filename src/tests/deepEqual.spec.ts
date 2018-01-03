
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import deepEqual from '../deepEqual'

it('handles primitive types', () => {
  expect(deepEqual(1, 1)).toBe(true)
})

it('handles arrays', () => {
  expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
  expect(deepEqual([1, 2, 3], [1, 3, 2])).toBe(false)
  expect(deepEqual([1, 2, 3], [1, 3])).toBe(false)
})

it('handles objects', () => {
  expect(deepEqual({ a: 42 }, { a: 42 })).toBe(true)
  expect(deepEqual({ a: 42 }, { a: 43 })).toBe(false)
  expect(deepEqual({ a: 42 }, {})).toBe(false)
})

it('can compare prototype-less objects with classic ones', () => {
  const dictionnary = Object.create(null)
  dictionnary.a = 42

  expect(deepEqual({ a: 42 }, dictionnary)).toBe(true)
})

it('handles functions', () => {
  const a = () => 42
  const b = () => 42

  expect(deepEqual(a, b)).toBe(false)
  expect(deepEqual(a, a)).toBe(true)
})

it('handles null objects', () => {
  expect(deepEqual(null, null)).toBe(true)
  expect(deepEqual(null, 42)).toBe(false)
  expect(deepEqual(null, '')).toBe(false)
  expect(deepEqual(null, {})).toBe(false)
  expect(deepEqual(null, { a: 42 })).toBe(false)
})
