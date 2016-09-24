# Settle
> Structural-sharing tree modifier

Settle is a little JavaScript library that permits to modify a tree by stuctural-sharing preserving tree immutability.

```
import { set } from 'settle'

const summerTree = { firstLeaf: 'green', lastLeaf: 'green' }
const autumnTree = set(tree, _ => _.firstLeaf)('yellow')

summerTree
//=> { firstLeaf: 'green', lastLeaf: 'green' }

autumnTree
//=> { firstLeaf: 'yellow', lastLeaf: 'green' }

```

## TypeScript
The main motivation of this library is to preserve static-typing, type-inference and completion provided by TypeScript, which is broken when using Immutable.js `fromJSON`.
