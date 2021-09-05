import { permutate } from "../lib/utils";

describe("Utils", () => {
  it("should return the given input if input length is 1", () => {
    const input = [1],
      options = { returnDuplicates: true };

    const result = permutate(input, options);

    expect(result).toEqual([input]);
  });

  it("should return the full permutation without repetition if input has no duplicates", () => {
    const input = [1, 2],
      options = { returnDuplicates: false };

    const result = permutate(input, options);

    expect(result).toEqual([
      [1, 2],
      [2, 1]
    ]);
  });

  it.skip("should return permutations without repetition if input has duplicates but returning of duplicates is disabled", () => {
    const input = [1, 1, 2],
      options = { returnDuplicates: false };

    const result = permutate(input, options);

    expect(result).toEqual([
      [1, 2],
      [2, 1]
    ]);
  });
});
