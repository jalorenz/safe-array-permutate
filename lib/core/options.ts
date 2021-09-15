import { CutOffLogLevel, CutOffStrategy, IPermutateOptions } from "../contracts";

export function getOptions(options?: IPermutateOptions) : IPermutateOptions {
  return {
    returnDuplicates: options?.returnDuplicates || false,
    maxResultEntries: options?.maxResultEntries || Infinity,
    cutOffStrategy: options?.cutOffStrategy || CutOffStrategy.linear,
    cutOffLogLevel: options?.cutOffLogLevel || CutOffLogLevel.warn,
  };
}
