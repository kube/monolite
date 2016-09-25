# Settle
> Structural-sharing tree modifier

Settle is a little JavaScript library that permits to modify a tree by stuctural-sharing preserving tree immutability.

```
import { set } from 'settle'

const summerTree = { firstLeaf: 'green', lastLeaf: 'green' }
const autumnTree = set(summerTree, _ => _.firstLeaf)('yellow')

summerTree
//=> { firstLeaf: 'green', lastLeaf: 'green' }

autumnTree
//=> { firstLeaf: 'yellow', lastLeaf: 'green' }

```

## TypeScript
The main motivation of this library is to preserve static-typing, type-inference and completion provided by TypeScript, which is broken when using Immutable.js `fromJSON`.

Settle takes Plain-Old JavaScript Objects and returns Plain-Old JavaScript Objects. Accessors permits TypeScript to understand the types you're dealing with and to provide completion and linting as if you were working directly on these objects.
