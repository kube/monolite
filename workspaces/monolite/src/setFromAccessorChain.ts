
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { AccessorChain } from 'axcessor'
import { assign } from './assign'
import { deepEqual } from './deepEqual'
// import { ValueTransformer } from './set'

const setInObject = <O extends {}, K extends keyof O, V extends O[K]>(
  object: O,
  key: K,
  value: V
) =>
  assign(Object.create(Object.getPrototypeOf(object)), object, {
    [key]: value,
  })

const setInArray = <V>(
  array: V[],
  index: string | number,
  value: V
) => [
  ...array.slice(0, Number(index)),
  value,
  ...array.slice(Number(index) + 1),
]

export function setFromAccessorChain<
         R extends any,
         A extends AccessorChain,
         V extends any
       >(root: R, accessorChain: A, value: V): R {
         if (accessorChain.length === 0) {
           // root is the target
           const newNode =
             typeof value === 'function' ? value(root) : value

           // Return root if structural equality
           return deepEqual(root, newNode) ? root : newNode
         } else {
           // root is a parent of the target
           const [key, ...nextAccessors] = accessorChain
           const newValue = setFromAccessorChain(
             (root as any)[key],
             nextAccessors,
             value
           )

           // Return root if identity equality
           return (root as any)[key] === newValue
             ? root
             : Array.isArray(root)
             ? setInArray(root, key as any, newValue)
             : setInObject(root as any, key, newValue)
         }
       }
