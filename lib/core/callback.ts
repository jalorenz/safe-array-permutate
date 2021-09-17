import { IPermutateOptions } from '../contracts';
import { permutate } from '../utils';
import { getOptions } from "./options";

export function safePermutateCallback<T>(
  input: T[],
  callback: (error: Error | null, result?: T[][]) => void,
  options?: IPermutateOptions
) : void {
  try {
    const result = permutate(input, getOptions(options));
    callback(null, result)
  } catch (e) {
    callback(e)
  }
}
