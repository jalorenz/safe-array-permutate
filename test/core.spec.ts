import permutate from "~lib/core";

describe("permutate", () => {
  it("should throw Error if input is empty array", () => {
    expect(() => permutate([])).toThrowError(Error);
  });

  it("should throw error if given max combinations length is smaller than given input length", () => {
    expect(() =>
      permutate([{ key: 1 }, { key: 2 }], {
        maxComputationLength: 1
      })
    ).toThrowError(Error);
  });
});
