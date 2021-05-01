# safe-array-permutate
[![Coverage Status](https://coveralls.io/repos/github/jalorenz/safe-array-permutate/badge.svg)](https://coveralls.io/github/jalorenz/safe-array-permutate)
[![Build Status](https://travis-ci.com/jalorenz/safe-array-permutate.svg?branch=main)](https://travis-ci.com/jalorenz/safe-array-permutate)

Calculates all possible combinations for given input. Two modes decide generation of combinations. Control amount of calculated combinations with max value.

```javascript
const input = [{ key: 1 }, { key: 2 }]

const result = permutate(input, {
    mode: PermutateMode.random,
    replication: true,  
    maxCombinationsLength: Infinity,
})



```

## Options


