// https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
import { IPermutateOptions } from "./contracts";

export function permutate<T>(input: T[], options: IPermutateOptions): T[][] {
  const result: T[][] = [];

  if (input.length < 2) {
    return [input];
  }

  if (!options.returnDuplicates) {
    input = input.filter((value, index, self) => self.indexOf(value) === index);
  }

  for (let i = 0; i < input.length; i++) {
    const entry = input[i];
    const remaining = input
      .slice(0, i)
      .concat(input.slice(i + 1, input.length));

    for (let permutation of permutate(remaining, options)) {
      result.push([entry].concat(permutation));
    }
  }

  return result;
}
