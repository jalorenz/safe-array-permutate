// https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
import { InvalidMaxResultEntriesOptionError, IPermutateOptions } from './contracts';

export function permutate<T>(input: T[], options: IPermutateOptions): T[][] {
  const result: T[][] = [];

  if (input.length < 2) {
    return [input];
  }

  if (options.maxResultEntries === 0) {
    throw new InvalidMaxResultEntriesOptionError(options.maxResultEntries);
  }

  if (!options.returnDuplicates) {
    input = input.filter((value, index, self) => self.indexOf(value) === index);
  }

  /* eslint-disable */
  for (let i = 0; i < input.length; i++) {
    const entry = input[i];
    const remaining = input
      .slice(0, i)
      .concat(input.slice(i + 1, input.length));

    const permutations = permutate(remaining, options);
    /* eslint-disable */
    for (let j = 0; j < permutations.length; j++) {
      if(!!options.maxResultEntries && result.length >= options.maxResultEntries) {
        break;
      }

      result.push([entry].concat(permutations[j]));
    }
  }

  return result;
}
