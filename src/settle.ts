
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain } from './accessorChain'

const setFromAccessorChain = <T, R>(root: R, accessorChain: string[]) =>
  (value: T): R => {
    if (accessorChain.length === 0) {
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
export const set = <R, T>(root: R, accessor: (x: R) => T) =>
  // TODO: Check deepEqual to return same root if not modified
  setFromAccessorChain<T, R>(root, getAccessorChain(accessor))
