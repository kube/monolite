
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { assign } from './assign'
import { deepEqual } from './deepEqual'
import { getAccessorChain } from './accessorChain'

export * from './pipe'

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
 * Return a new tree with target key updated
 */
export function set<R, T, A extends AccessorFunction<R, T>>(
  root: R,
  accessor: A,
  value: ValueTransformer<A>
): R

export function set<R, T, A extends AccessorChain>(
  root: R,
  accessor: A,
  value: ValueTransformer<A>
): R

export function set<R, T, A extends Accessor<R, T>>(
  root: R,
  accessor: A,
  value: ValueTransformer<A>
): R {
  const accessorChain =
    typeof accessor === 'function'
      ? getAccessorChain(accessor as AccessorFunction<R>)
      : (accessor as AccessorChain)

  const currentNode: any = root

  if (accessorChain.length === 0) {
    // currentNode is the target
    const newNode: any =
      value instanceof Function ? value(currentNode) : value

    // Return currentNode if structural equality
    return deepEqual(currentNode, newNode) ? currentNode : newNode
  } else {
    // currentNode is a parent of the target
    const [key, ...nextAccessors] = accessorChain
    const newValue = set(currentNode[key], nextAccessors, value)

    // Return currentNode if identity equality
    return currentNode[key] === newValue
      ? currentNode
      : Array.isArray(currentNode)
        ? [
            ...currentNode.slice(0, Number(key)),
            newValue,
            ...currentNode.slice(Number(key) + 1)
          ]
        : assign(
            Object.create(Object.getPrototypeOf(currentNode)),
            currentNode,
            { [key]: newValue }
          )
  }
}
