
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain, AccessorFunction, AccessorChain } from 'axcessor'
import { setFromAccessorChain } from './setFromAccessorChain'

export type ValueTransformer<
  R,
  A extends AccessorFunction<R>,
  V extends AccessorFunction.GetTarget<
    A
  > = AccessorFunction.GetTarget<A>
> = V | ((currentValue: V) => V)

type Accessor<R> = AccessorFunction.Safe<R> | AccessorChain.Safe<R>

type GetTarget<R, A extends Accessor<R>> = A extends AccessorChain.Safe<infer R> ? AccessorChain.GetTarget<R, A> : A extends AccessorFunction ? AccessorFunction.GetTarget<A>

/**
 * Return an updated tree using Accessor Function
 */
export function set<R, A extends Accessor<R>>(
  root: R,
  accessor: A,
  value: ValueTransformer<R, A>
): R {
  return setFromAccessorChain(
    root,

    getAccessorChain(accessor as any),

    value as any
  )
}
