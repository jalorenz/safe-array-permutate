# safe-array-permutate

This package provides a safe way to generate permutations for a given input array. 

[![Build Status](https://app.travis-ci.com/jalorenz/safe-array-permutate.svg?branch=main)](https://app.travis-ci.com/jalorenz/safe-array-permutate)
[![Coverage Status](https://coveralls.io/repos/github/jalorenz/safe-array-permutate/badge.svg?branch=main)](https://coveralls.io/github/jalorenz/safe-array-permutate?branch=main)
![npm](https://img.shields.io/npm/dt/safe-array-permutate)

## Usage

Test

The library exports the following functions:

- `safePermutateSync<T>(input: T[], options?: IPermutateOptions)` (synchronous version)
- `safePermutateAsync<T>(input: T[], options?: IPermutateOptions)` (asynchronous version)
- `safePermutateCallback<T>(input: T[], callback: (error: Error | null, result?: T[][]) options?: IPermutateOptions` (callback version).

```ts
import { safePermutateSync, IPermutateOptions, CutOffLogLevel } from "safe-array-permutate"

const input = [1, 2]
const options: IPermutateOptions = {
  returnDuplicates: false,
  cutOffLogLevel: CutOffLogLevel.off,
}

const result = safePermutateSync(input, options)

console.log(result) // [[1, 2], [2, 1]]
```
## Options

Additional options to configure the permutation of the given input can be provided via a second, optional parameter when calling the ```safePermutate``` function.

```ts
enum CutOffStrategy {
  linear = 'linear',
}

enum CutOffLogLevel {
  off = 'off',
  warn = 'warn',
}

interface IPermutateOptions {
  // Controls whether duplicates in input should result 
  // in duplicate result entries (for example: input = [1, 1, 2]). (Default: false)
  returnDuplicates?: boolean,
  // Specifies the maximum number of returned entries from the permutation,
  // idependently from the given input. Must be greater than 0. (Default: Infinity)
  maxResultEntries?: number
  // Applied strategy when result entries needs to be cut off. 
  // More strategies are following). (Default: CutOffStrategy.linear)
  cutOffStrategy?: CutOffStrategy
  // Configured log level for cutting off result entries. 
  // (Default: CutOffLogLevel.warn)
  cutOffLogLevel?: CutOffLogLevel
}
```

## Migration of v1 to v2

Replace `safeArrayPermutate<T>(...)` with `safePermutateSync<T>(...)`.
