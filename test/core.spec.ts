import permutate from "~lib/core";
import { PermutateMode } from "~lib/interfaces";

describe("permutate", () => {
  it("should throw Error if given input is empty array", () => {
    expect(() => permutate([])).toThrowError(Error);
  });

  it("should throw error if given max combinations length is given and it is smaller than given input length", () => {
    expect(() =>
      permutate([{ key: 1 }, { key: 2 }], {
        maxComputationLength: 1
      })
    ).toThrowError(Error);
  });

  it("should return shuffled version of given input when mode is random", () => {
    const firstIndexShuffled = [{ key: 1 }, { key: 2 }];
    const secondIndexShuffled = [{ key: 2 }, { key: 1 }];
    jest.mock("~lib/utils", () => ({
      shuffle: jest
        .fn()
        .mockImplementationOnce(() => firstIndexShuffled)
        .mockImplementationOnce(() => secondIndexShuffled)
    }));

    const result = permutate([{ key: 1 }, { key: 2 }], {
      mode: PermutateMode.random
    });

    expect(result).toEqual([...firstIndexShuffled, ...secondIndexShuffled]);
  });
});
