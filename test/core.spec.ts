import { safePermutate } from "../lib";
import * as utils from "../lib/utils";
import { IPermutateOptions } from "../lib";

jest.mock("../lib/utils", () => ({
  permutate: jest.fn()
}));

describe("Core", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call permutate util function with given input and default options, if no options are given", () => {
    const input = [1, 2];
    const defaultOptions: IPermutateOptions = {
      returnDuplicates: false
    };

    safePermutate(input);

    expect(utils.permutate).toHaveBeenCalledWith(input, defaultOptions);
  });

  it("should call permutate util function with given input and options", () => {
    const input = [1, 2];
    const options: IPermutateOptions = {
      returnDuplicates: true
    };

    safePermutate(input, options);

    expect(utils.permutate).toHaveBeenCalledWith(input, options);
  });
});
