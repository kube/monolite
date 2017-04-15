
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import deepEqual from 'deep-equal'
import { getAccessorChain } from './accessorChain'

/**
 * Return a new tree with target key updated
 */
export const setFromAccessorChain = <T, R>(root: R, accessors: string[]) =>
  (value: T | ((_: T) => T)): R => {

    const currentNode: any = root

    if (accessors.length === 0) {
      // currentNode is the target
      const newNode: any =
        value instanceof Function ? value(currentNode) : value

      // Return currentNode if structural equality
      return deepEqual(currentNode, newNode)
        ? currentNode
        : newNode
    }

    else {
      // currentNode is a parent of the target
      const [key, ...nextAccessors] = accessors
      const newValue =
        setFromAccessorChain(currentNode[key], nextAccessors)(value)

      // Return currentNode if identity equality
      return currentNode[key] === newValue
        ? currentNode
        : Array.isArray(currentNode)
          ? [
            ...currentNode.slice(0, Number(key)),
            newValue,
            ...currentNode.slice(Number(key) + 1),
          ]
          : Object.assign({}, currentNode, { [key]: newValue })
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

/**
 * Return a new updated tree, with filtered array
 */
export const setFilter = <R, T>(root: R, accessor: (_: R) => T[]) =>
  (predicate: (_: T) => boolean): R =>
    set(root, accessor)(arr => arr.filter(predicate))
