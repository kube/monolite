
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getAccessorChain } from './accessorChain'

export type Target = string | number | boolean | {} | any[] | undefined | null

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
export const set = <R, T extends Target>(root: R, accessor: (x: R) => T) =>
  // TODO: Check deepEqual to return same root if not modified
  setFromAccessorChain<T, R>(root, getAccessorChain(accessor))

/**
 * Return a new tree with applied modification on an array
 */
export const setMap = <R, T extends Target>(root: R, accessor: (x: R) => T[]) =>
  (callback: ((_: T) => T)): R =>
    set(root, accessor)(arr => arr.map(value => callback(value)))

/**
 * Return a new updated tree, with item appended to array
 */
export const setAppend = <R, T extends Target>(root: R, accessor: (x: R) => T[]) =>
  (item: T): R =>
    set(root, accessor)(arr => [...arr, item])

/**
 * Return a new updated tree, with item prepended to array
 */
export const setPrepend = <R, T extends Target>(root: R, accessor: (x: R) => T[]) =>
  (item: T): R =>
    set(root, accessor)(arr => [item, ...arr])
