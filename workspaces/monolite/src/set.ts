
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Accessor } from 'axcessor'
import { setFromAccessorChain } from './setFromAccessorChain'

export type ValueTransformer<
  R,
  A extends Accessor<R>,
  V extends Accessor.GetTarget<R, A> = Accessor.GetTarget<R, A>
> = V | ((currentValue: V) => V)

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
    Accessor.toAccessorChain<R>(accessor),
    value
  )
}
