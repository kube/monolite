[![CircleCI](https://circleci.com/gh/kube/monolite.svg?style=svg)](https://circleci.com/gh/kube/monolite)

<h1 align="center">
  <img alt"Monolite"
    src="https://rawgithub.com/kube/monolite/master/logo.svg">
</h1>

<h3 align="center">Type-safe structural-sharing tree modifier.</h3>

<p align="center">
  <img width=670 src="https://cloud.githubusercontent.com/assets/2991143/24076996/5d039210-0c3f-11e7-9df8-44d3ac93198f.gif" />
</p>

## Install

```sh
yarn add monolite
```

## Babel Plugin

Monolite by default makes usage of ES2015 `Proxy`, which permits to transform accessor functions to accessor chains.

```js
// Using accessor function
set(state, _ => _.nested.prop, 42)

// Using accessor chain
set(state, ['nested', 'prop'], 42)
```

To target older runtimes, which do not support `Proxy`, a Babel plugin, bundled with the library, permits to do these transformations statically, at compile-time.

### Setup

In **babel.config.js**, simply add:

```js
module.exports = api => {
  return {
    presets: [
      // ...
    ],
    plugins: ['monolite/plugin/babel']
  }
}
```

Voilà, all your accessor functions will be transformed to accessor chains during transpilation.

## TypeScript

The main motivation of this library is to preserve static-typing, type-inference and completion provided by TypeScript, which is not supported by Immutable.js when working on trees.

**Monolite** takes **Plain-Old JavaScript Objects** and returns **Plain-Old JavaScript Objects**. Accessors permit TypeScript to understand the types you're dealing with and to provide completion and linting as if you were working directly on these objects.
