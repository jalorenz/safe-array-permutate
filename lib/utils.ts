// https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979
import { IPermutateOptions } from './contracts';

export function permutate<T>(input: T[], options?: IPermutateOptions): T[][] {
  const { length } = input;
  const result = [input.slice()];
  const c = new Array(length).fill(0);
  let i = 1;
  let k;
  let p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = input[i];
      input[i] = input[k];
      input[k] = p;
      c[i] += 1;
      i = 1;
      result.push(input.slice());
    } else {
      c[i] = 0;
      i += 1;
    }
  }

  return result;
}
