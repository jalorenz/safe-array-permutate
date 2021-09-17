import { IPermutateOptions } from '../contracts';
import { permutate } from '../utils';

export async function safePermutateAsync<T>(input: T[], options: IPermutateOptions) : Promise<T[][]> {
  return new Promise((resolve, reject) => {
    try {
      const result = permutate(input, options);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
