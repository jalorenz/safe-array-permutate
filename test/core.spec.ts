import { safePermutate } from "../lib";
import * as utils from "../lib/utils";

jest.mock("../lib/utils", () => ({
  permutate: jest.fn()
}));

describe("Core", () => {
  it("should call permutate util function with input", () => {
    const input = [1, 2];

    safePermutate(input);

    expect(utils.permutate).toHaveBeenCalledWith(input);
  });
});
