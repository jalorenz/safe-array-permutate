import { CutOffLogLevel, CutOffStrategy, IPermutateOptions, safePermutateSync } from "../../lib";
import * as options from '../../lib/core/options'

describe("Sync", () => {
  it.each([
    [true],
    [false]
  ])("should call permutate function with input and result from getOptions", (returnDuplicates: boolean) => {
    const input = [1, 2]
    const returnedOptions: IPermutateOptions = {
      returnDuplicates,
      maxResultEntries: 2,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.off,
    }
    jest.spyOn(options, "getOptions").mockReturnValue(returnedOptions)

    const result = safePermutateSync(input)

    expect(result).toStrictEqual([
      [1, 2],
      [2, 1]
    ])
  })
})
