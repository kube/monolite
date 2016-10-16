
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain } from './accessorChain'

type Target = string | number | boolean | {} | any[]

const setFromAccessorChain =
  <T extends Target, R>(root: R, accessorChain: string[]) =>
    (value: T | ((_: T) => T)): R => {

      if (accessorChain.length === 0) {
        if (value instanceof Function)
          return value(root as any) as any
        else
          return value as any
      }
      else {
        const node = root as any
        const key = accessorChain.shift()

        return Object.assign({}, node, {
          [key]: setFromAccessorChain(node[key], accessorChain)(value)
        })
      }
    }

/**
 * Return a new tree with applied modification
 */
export const set = <R, T extends Target, P extends T>(root: R, accessor: (x: R) => T, value: P | ((_: P) => P)) =>
  // TODO: Check deepEqual to return same root if not modified
  setFromAccessorChain<T, R>(root, getAccessorChain(accessor))(value)
