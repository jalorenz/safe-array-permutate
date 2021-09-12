export enum CutOffStrategy {
  linear = 'linear',
  random = 'random'
}

export enum CutOffLogLevel {
  off = 'off',
  warn = 'warn',
  error = 'error'
}

export interface IPermutateOptions {
  returnDuplicates?: boolean;
  maxResultEntries?: number
  cutOffStrategy?: CutOffStrategy
  cutOffLogLevel?: CutOffLogLevel
}
