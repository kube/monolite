
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import {
  set,
  Accessor,
  AccessorFunction,
  AccessorChain,
  ValueTransformer
} from './set'

export class SetFluent<R> {
  constructor(private value: R) {}

  /**
   * Set subproperty value using accessor function
   */
  set<T, A extends AccessorFunction<R, T>>(
    accessor: A,
    value: ValueTransformer<A>
  ): this

  /**
   * Set subproperty value using accessor chain
   */
  set<T, A extends AccessorChain>(
    accessor: A,
    value: ValueTransformer<A>
  ): this

  /**
   * Set subproperty value
   */
  set<T, A extends Accessor<R, T>>(
    accessor: A,
    value: ValueTransformer<A>
  ) {
    this.value = set(this.value, accessor, value)
    return this
  }

  /**
   * Unwrap value
   */
  end() {
    return this.value
  }
}
