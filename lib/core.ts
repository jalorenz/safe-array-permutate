import {
  IIncomingOptions,
  IPermutateOptions,
  PermutateMode
} from "~lib/interfaces";
import { computeCombinationsLength, getReplication, shuffle } from "~lib/utils";

export default function permutate(
  input: any[],
  incomingOptions?: IIncomingOptions
): any[] {
  if (!input.length || input.length === 0) {
    throw new Error("Cannot permutate on empty array");
  }

  if (
    incomingOptions?.maxComputationLength &&
    input.length >= incomingOptions?.maxComputationLength
  ) {
    throw new Error(
      "Max combinations length cannot be smaller than given input"
    );
  }

  const replication = getReplication(incomingOptions?.replication);

  const options: IPermutateOptions = {
    mode: incomingOptions?.mode || PermutateMode.default,
    maxCombinationsLength:
      incomingOptions?.maxComputationLength ||
      computeCombinationsLength(input, replication),
    replication
  };

  const result: any[] = [];
  if (options.mode === PermutateMode.random) {
    for (let i = 0; i < options.maxCombinationsLength - 1; i++) {
      result[i] = shuffle(input);
    }
  }

  return result;
}
