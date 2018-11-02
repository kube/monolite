
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain } from './accessorChain'
import { SetFluent } from './SetFluent'
import { setFromAccessorChain } from './setFromAccessorChain'

export type AccessorChain = (string | number)[]
export type AccessorFunction<R = any, T = any> = (root: R) => T
export type Accessor<R, T = any> =
  | AccessorChain
  | AccessorFunction<R, T>

export type AccessorTargetType<
  A extends Accessor<any>
> = A extends AccessorFunction<any, infer T>
  ? T
  : A extends AccessorChain ? any : never

export type ValueTransformer<A extends Accessor<any>> =
  | AccessorTargetType<A>
  | ((value: AccessorTargetType<A>) => AccessorTargetType<A>)

/**
 * Return an updated tree using accessor function
 */
export function set<R, T, A extends AccessorFunction<R, T>>(
  root: R,
  accessor: A,
  value: ValueTransformer<A>
): R

/**
 * Return an updated tree using accessor chain
 */
export function set<R, T, A extends AccessorChain>(
  root: R,
  accessor: A,
  value: ValueTransformer<A>
): R

/**
 * Return an updated tree using accessor
 */
export function set<R, T, A extends Accessor<R, T>>(
  root: R,
  accessor: A,
  value: ValueTransformer<A>
): R

/**
 * Update immutable tree using fluent Api
 */
export function set<R>(root: R): SetFluent<R>

export function set<R, T, A extends Accessor<R, T>>(
  root: R,
  ...args: (A | ValueTransformer<A>)[]
): R | SetFluent<R> {
  const [accessor, value] = args

  if (typeof accessor === 'undefined') {
    // If only passed the root return the fluent set api
    return new SetFluent(root)
  } else {
    // Else return an updated tree
    return setFromAccessorChain(
      root,
      typeof accessor === 'function'
        ? getAccessorChain(accessor as AccessorFunction<R>)
        : (accessor as AccessorChain),
      value
    )
  }
}
