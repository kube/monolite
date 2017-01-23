
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain } from './accessorChain'

/**
 * Return a new tree with target key updated
 */
export const setFromAccessorChain =
  <T, R>(root: R, accessorChain: string[]) =>
    (value: T | ((_: T) => T)): R => {

      if (accessorChain.length === 0) {
        // TODO: Check deepEqual to return same root if not modified
        if (value instanceof Function)
          return value(root as any) as any
        else
          return value as any
      }
      else {
        const node = root as any
        const [key, ...accessors] = accessorChain

        return Object.assign({}, node, {
          [key]: setFromAccessorChain(node[key], accessors)(value)
        })
      }
    }

/**
 * Return a new tree with target key updated
 */
export const set = <R, T>(root: R, accessor: (_: R) => T) =>
  setFromAccessorChain<T, R>(root, getAccessorChain(accessor))

/**
 * Return a new tree with applied modification on an array
 */
export const setMap = <R, T>(root: R, accessor: (_: R) => T[]) =>
  (func: (_: T) => T): R =>
    set(root, accessor)(arr => arr.map(func))

/**
 * Return a new updated tree, with item appended to array
 */
export const setAppend = <R, T>(root: R, accessor: (_: R) => T[]) =>
  (item: T): R =>
    set(root, accessor)(arr => [...arr, item])

/**
 * Return a new updated tree, with item prepended to array
 */
export const setPrepend = <R, T>(root: R, accessor: (_: R) => T[]) =>
  (item: T): R =>
    set(root, accessor)(arr => [item, ...arr])
