import { PermutationOptions } from './contracts';
import { InvalidMaxLengthError } from './errors';
import { permutate } from './utils';

export function safePermutate<T>(input: T[], options?: PermutationOptions) : T[][] {
  const opts: PermutationOptions = {
    maxLength: options?.maxLength ?? Infinity,
  };

  if (opts.maxLength === 0) {
    throw new InvalidMaxLengthError();
  }

  return permutate(input);
}
