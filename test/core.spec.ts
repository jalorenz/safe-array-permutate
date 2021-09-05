import { safePermutate } from "../lib";
import * as utils from "../lib/utils";
import { IPermutateOptions } from "../lib";

jest.mock("../lib/utils", () => ({
  permutate: jest.fn()
}));

describe("Core", () => {
  it("should call permutate util function with input and default options", () => {
    const input = [1, 2];
    const defaultOptions: IPermutateOptions = {
      returnDuplicates: false
    };

    safePermutate(input);

    expect(utils.permutate).toHaveBeenCalledWith(input, defaultOptions);
  });
});
