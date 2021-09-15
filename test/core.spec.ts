import {
  CutOffLogLevel,
  CutOffStrategy,
  IPermutateOptions,
  safePermutate
} from "../lib";
import * as utils from '../lib/utils'
import * as options from '../lib/core/options'

describe('Core', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call getOptions with given undefined options", () => {
    const input = [1, 2];
    const spy = jest.spyOn(options, "getOptions")

    safePermutate(input)

    expect(spy).toHaveBeenCalledWith(undefined)
  })

  it("should call permutate function with options", () => {
    const input = [1, 2]
    const computedOptions: IPermutateOptions = {
      returnDuplicates: false,
      maxResultEntries: Infinity,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    }
    jest.spyOn(options, "getOptions").mockReturnValue(computedOptions)
    const spy = jest.spyOn(utils, "permutate")

    safePermutate(input)

    expect(spy).toHaveBeenCalledWith(input, computedOptions)
  })
});
