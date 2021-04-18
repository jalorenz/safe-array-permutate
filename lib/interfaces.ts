export enum PermutateMode {
  random,
  default
}

export interface IIncomingOptions {
  mode?: PermutateMode;
  replication?: boolean;
  maxComputationLength?: number;
}

export interface IPermutateOptions {
  mode: PermutateMode;
  maxCombinationsLength: number;
  replication: boolean;
}
