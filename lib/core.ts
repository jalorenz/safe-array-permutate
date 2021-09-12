import { permutate } from './utils';
import { IPermutateOptions } from './contracts';

export function safePermutate<T>(
  input: T[],
  options?: IPermutateOptions,
): T[][] {
  const opts: IPermutateOptions = {
    returnDuplicates: options?.returnDuplicates || false,
    maxResultEntries: options?.maxResultEntries || Infinity,
  };

  return permutate(input, opts);
}
