[![CircleCI](https://circleci.com/gh/kube/monolite.svg?style=svg)](https://circleci.com/gh/kube/monolite)

<h1 align="center">
  <img alt"Monolite"
    src="https://rawgithub.com/kube/monolite/master/logo.svg">
</h1>

<h3 align="center">Structural-sharing tree modifier. Statically-typed.</h3>

<p align="center">
  <img width=670 src="https://cloud.githubusercontent.com/assets/2991143/24076996/5d039210-0c3f-11e7-9df8-44d3ac93198f.gif" />
</p>


## Install

```sh
yarn add monolite
```


## TypeScript
The main motivation of this library is to preserve static-typing, type-inference and completion provided by TypeScript, which is not supported by Immutable.js when working on trees.

**Monolite** takes **Plain-Old JavaScript Objects** and returns **Plain-Old JavaScript Objects**. Accessors permit TypeScript to understand the types you're dealing with and to provide completion and linting as if you were working directly on these objects.
