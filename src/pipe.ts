
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { set, AccessorFunction, ValueTransformer } from '.'

export function pipe<R>(input: R) {
  return {
    set: <T, A extends AccessorFunction<R, T>>(
      accessor: A,
      value: ValueTransformer<A>
    ) => pipe(set(input, accessor, value)),
    end: () => input
  }
}
