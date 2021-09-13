export enum CutOffStrategy {
  linear = 'linear',
  random = 'random'
}

export enum CutOffLogLevel {
  off = 'off',
  warn = 'warn',
}

export interface IPermutateOptions {
  returnDuplicates?: boolean;
  maxResultEntries?: number
  cutOffStrategy?: CutOffStrategy
  cutOffLogLevel?: CutOffLogLevel
}

export class InvalidMaxResultEntriesOptionError extends Error {
  constructor(input: number) {
    super(`Given input ${input} for option 'maxResultEntries' is smaller than then length of input`);
  }
}
