# safe-array-permutate

This package provides a safe way to generate permutations for a given input.

[![Build Status](https://app.travis-ci.com/jalorenz/safe-array-permutate.svg?branch=main)](https://app.travis-ci.com/jalorenz/safe-array-permutate)
[![Coverage Status](https://coveralls.io/repos/github/jalorenz/safe-array-permutate/badge.svg?branch=main)](https://coveralls.io/github/jalorenz/safe-array-permutate?branch=main)
![npm](https://img.shields.io/npm/dt/safe-array-permutate)

```ts
import { safePermutate } from "safe-array-permutate"

const input = [1, 2]

const result = safePermutate(input)

console.log(result) // [[1, 2], [2, 1]]
```
## Options

Additional options to configure the permutation of the given input can be provided via a second, optional parameter when calling the ```safePermutate``` function.

```ts
interface IPermutateOptions {
  // controls whether duplicates in input should result 
  // in duplicate result entries (for example: input = [1, 1, 2])
  returnDuplicates?: boolean, 
}
```

