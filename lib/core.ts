import { permutate } from './utils';
import { IPermutateOptions } from './contracts';
import { getOptions } from "./core/options";

export function safePermutate<T>(
  input: T[],
  options?: IPermutateOptions,
): T[][] {
  return permutate(input, getOptions(options));
}
