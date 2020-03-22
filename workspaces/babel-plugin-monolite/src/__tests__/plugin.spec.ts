
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { transform } from '@babel/core'
import monolitePlugin from '../plugin'

const BABEL_OPTIONS = {
  plugins: [monolitePlugin],
}

it(`can take identifier accessors`, () => {
  const source = `import { set } from 'monolite';
set(state, _ => _.a.b.c, 42);`

  const expected = `import { set } from 'monolite';
set(state, ["a", "b", "c"], 42);`

  const result = transform(source, {
    plugins: [monolitePlugin],
  })

  expect(result!.code).toBe(expected)
})

it(`can take literal accessors`, () => {
  const source = `import { set } from 'monolite';
set(state, _ => _['a'].b['c'], 42);`

  const expected = `import { set } from 'monolite';
set(state, ['a', "b", 'c'], 42);`

  const result = transform(source, BABEL_OPTIONS)

  expect(result!.code).toBe(expected)
})

it(`can take uncomputed identifier accessors`, () => {
  const source = `import { set } from 'monolite';
set(state, _ => _['a'].b[c], 42);`

  const expected = `import { set } from 'monolite';
set(state, ['a', "b", c], 42);`

  const result = transform(source, {
    plugins: [monolitePlugin],
  })

  expect(result!.code).toBe(expected)
})

it(`can transform fluent-style set`, () => {
  const source = `import { set } from 'monolite';
set(state).set(_ => _.a.b.c, 42).set(_ => _.a.d.e, x => x + 1).end();`

  const expected = `import { set } from 'monolite';
set(state).set(["a", "b", "c"], 42).set(["a", "d", "e"], x => x + 1).end();`

  const result = transform(source, BABEL_OPTIONS)

  expect(result!.code).toBe(expected)
})

it(`should throw if accessor does not return member expression`, () => {
  const classicalSource = `import { set } from 'monolite';
set(state, _ => something.b.c, 42)`

  expect(() => transform(classicalSource, BABEL_OPTIONS)).toThrow(
    'Monolite: Accessor function should return a subproperty of root'
  )

  const fluentSource = `import { set } from 'monolite';
set(state).set(_ => something.b.c, 42)`

  expect(() => transform(fluentSource, BABEL_OPTIONS)).toThrow(
    'Monolite: Accessor function should return a subproperty of root'
  )
})
