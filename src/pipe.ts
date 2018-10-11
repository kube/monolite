
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { set, AccessorFunction, ValueTransformer } from './set'

export type Pipe<R> = {
  set: <T, A extends AccessorFunction<R, T>>(
    accessor: A,
    value: ValueTransformer<A>
  ) => Pipe<R>
  end: () => R
}

export function pipe<R>(input: R): Pipe<R> {
  return {
    set: <T, A extends AccessorFunction<R, T>>(
      accessor: A,
      value: ValueTransformer<A>
    ) => pipe(set(input, accessor, value)),
    end: () => input
  }
}
