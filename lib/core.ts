import { permutate } from "./utils";
import { CutOffLogLevel, CutOffStrategy, IPermutateOptions } from "./contracts";

export function safePermutate<T>(
  input: T[],
  options?: IPermutateOptions,
): T[][] {
  const opts: IPermutateOptions = {
    returnDuplicates: options?.returnDuplicates || false,
    maxResultEntries: options?.maxResultEntries || Infinity,
    cutOffStrategy: options?.cutOffStrategy || CutOffStrategy.linear,
    cutOffLogLevel: options?.cutOffLogLevel || CutOffLogLevel.warn,
  };

  return permutate(input, opts);
}
