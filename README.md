<h1>
  <img alt"Monolite"
    src="https://rawgithub.com/kube/monolite/master/logo.svg">
</h1>

## Structural-sharing tree modifier

**Monolite** is a JavaScript library permitting tree stuctural-sharing, preserving tree immutability.

It is written in TypeScript and provides **static analysis** and **completion**, by using accessor functions.

<img width=670 src="https://cloud.githubusercontent.com/assets/2991143/22441124/6636ceac-e736-11e6-88d1-621fe4d81304.gif" />

## Install

```sh
npm install --save monolite
```

## Usage

Consider a tree `summerTree` with two branches, and two leaves for each of its branches.

```js
const summerTree = {
  leftBranch: {
    firstLeaf: 'green',
    lastLeaf: 'green'
  },
  rightBranch: {
    firstLeaf: 'green',
    lastLeaf: 'green'
  }
}
```

Imagine that we want to apply a modification on `summerTree`, in a functional way, without doing any mutation.

We want to define a new tree, `autumnTree`, which will have the `firstLeaf` of its `rightBranch` set as yellow.

```js
import { set } from 'monolite'
const autumnTree = set(summerTree, _ => _.rightBranch.firstLeaf)('yellow')
```

`summerTree` is still the same object as declared:
```js
{
  leftBranch: {
    firstLeaf: 'green',
    lastLeaf: 'green'
  },
  rightBranch: {
    firstLeaf: 'green',
    lastLeaf: 'green'
  }
}
```

`autumnTree` shares structure with `summerTree` except for `firstLeaf` of `rightBranch` which has been set to `'yellow'`
```js
{
  leftBranch: {
    firstLeaf: 'green',
    lastLeaf: 'green'
  },
  rightBranch: {
    firstLeaf: 'yellow',
    lastLeaf: 'green'
  }
}
```

## TypeScript
The main motivation of this library is to preserve static-typing, type-inference and completion provided by TypeScript, which is broken when using Immutable.js `fromJS`.

**Monolite** takes **Plain-Old JavaScript Objects** and returns **Plain-Old JavaScript Objects**. Accessors permit TypeScript to understand the types you're dealing with and to provide completion and linting as if you were working directly on these objects.


## Development

### Build
The build process involves **TypeScript** and **Babel**.

```sh
gulp build
```

### Test
Will run tests using **Mocha**.

```sh
gulp test
```

### Development mode
Will **watch** source, build and run tests automatically on update.

```sh
gulp dev
```
