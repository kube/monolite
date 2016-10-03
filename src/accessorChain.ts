
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const ACCESSOR_CHAIN = Symbol()

/**
 * Returns a proxy object that will fill accessor chain when accessing a member
 */
let currentAccessorChain: string[] = []

const ProxyAccessorChain: any = new Proxy({}, {
  get: (node: any, name: string | symbol) => {
    // Get accessors chain and clear it for next use
    if (name === ACCESSOR_CHAIN) {
      const accessorChain = currentAccessorChain
      currentAccessorChain = []
      return accessorChain
    }
    else {
      // Push current accessor to accessor chain
      currentAccessorChain.push(name as string)
      return ProxyAccessorChain
    }
  }
})

/**
 * Returns accessors chain given an accessor expression
 * e.g. `_ => _.a.b` will return `['a', 'b']`
 */
export const getAccessorChain = (accessor: (_: any) => any) => {
  const accessorChain: string[] = []

  accessor(ProxyAccessorChain)
  return ProxyAccessorChain[ACCESSOR_CHAIN]
}
