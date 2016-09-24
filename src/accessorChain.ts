
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * Returns a proxy of object that will feed accessor chain when accessing member
 */
const proxyAccessorChain = <T>(accessorChain: string[], node: T): T =>
  new Proxy(node, {
    get: (node: any, name: string) => {

      if (node.hasOwnProperty(name)) {
        const child = node[name]
        accessorChain.push(name)

        // If child is not an object there's no need to proxify it
        return child instanceof Object ?
          proxyAccessorChain(accessorChain, child) : child
      }
      else
        return node[name]
    }
  })

/**
 * Returns accessors chain given rootNode and accessor expression
 */
export const getAccessorChain = <R, T>(root: R, accessor: (_: R) => T) => {
  const accessorChain: string[] = []
  const rootProxy = proxyAccessorChain(accessorChain, root)

  // Fill accessorChain
  accessor(rootProxy)

  return accessorChain
}
