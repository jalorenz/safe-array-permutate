import { IPermutateOptions } from '../contracts';
import { permutate } from '../utils';
import { getOptions } from "./options";

export function safePermutateSync<T>(
  input: T[],
  options?: IPermutateOptions
) : T[][] {
  return permutate(input, getOptions(options));
}
