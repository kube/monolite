
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { __assign as assign } from '../assign'

it('copies all properties in a target object', () => {
  const source = { a: 42, b: 'Hello' }
  const clone = assign({}, source)

  expect(clone).not.toBe(source)
  expect(clone).toEqual(source)
})

it('only copies own properties', () => {
  const prototype = { a: 42 }
  const source = Object.create(prototype, {
    b: { enumerable: true, value: 'Hello' },
  })

  const clone = assign({}, source)

  expect(source.a).toEqual(42)
  expect(clone).not.toHaveProperty('a')
  expect(source.b).toEqual(clone.b)
})

it('can copy multiple sources', () => {
  const source1 = { a: 42 }
  const source2 = { b: 'Hello' }
  const source3 = { c: { hello: 'World' } }

  const mixin = assign({}, source1, source2, source3)

  expect(mixin.a).toEqual(42)
  expect(mixin.b).toEqual('Hello')
  expect(mixin.c).toEqual({ hello: 'World' })
})

it('can mutate target object', () => {
  const target = { a: 42, b: 'Bonjour' }
  const source = { a: 13, c: 'Hello' }

  assign(target, source)

  expect(target.a).toEqual(13)
  expect(target.b).toEqual('Bonjour')
  expect((target as any).c).toEqual('Hello')
})
