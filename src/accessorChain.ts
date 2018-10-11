
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { AccessorFunction } from './set'

/**
 * Return a Proxy that pushes accessors to accessorChain, recursively
 */
const createAccessorChainFiller = (accessorChain: string[]) => {
  const fillerProxy: ProxyHandler<any> = new Proxy(
    {},
    {
      get: (node: any, name: string) => {
        // Push current accessor to accessor chain
        accessorChain.push(name)
        // Fill accessors recursively
        return fillerProxy
      }
    }
  )
  return fillerProxy
}

/**
 * Transform accessor function to accessor chain
 * e.g. (_ => _.a.b.c) will return ['a', 'b', 'c']
 */
export const getAccessorChain = (accessor: AccessorFunction) => {
  const accessorChain: string[] = []
  const accessorChainFiller = createAccessorChainFiller(accessorChain)

  // Fill accessor chain
  accessor(accessorChainFiller)

  return accessorChain
}
