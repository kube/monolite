
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { pipe } from '../pipe'

it('can chain transformations', () => {
  type State = {
    a: {
      b: { c: number }
      d: { e: string }
    }
  }

  const state: State = {
    a: {
      b: { c: 42 },
      d: { e: 'Hello!' }
    }
  }

  const updatedState = pipe(state)
    .set(_ => _.a.b.c, value => value / 2 + 1)
    .set(_ => _.a.d.e, word => word + '!')
    .end()

  expect(updatedState.a.b.c).toBe(22)
  expect(updatedState.a.d.e).toBe('Hello!!')
})
