import { permutate } from "../lib/utils";

describe("Utils", () => {
  it.each([[false], [true]])(
    "should return the given input if input length is 1",
    (returnDuplicates: boolean) => {
      const input = [1],
        options = { returnDuplicates };

      const result = permutate(input, options);

      expect(result).toEqual([input]);
    }
  );

  it("should return the full permutation of an array with length 2 without repetition if input has no duplicates", () => {
    const input = [1, 2],
      options = { returnDuplicates: false };

    const result = permutate(input, options);

    expect(result).toEqual([
      [1, 2],
      [2, 1]
    ]);
  });

  it("should return the full permutation of an array with length 3 without repetition if input has no duplicates", () => {
    const input = [1, 2, 3],
      options = { returnDuplicates: false };

    const result = permutate(input, options);

    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]);
  });

  it("should return permutations with repetition if input has duplicates and returning of duplicates is enabled", () => {
    const input = [1, 1, 2],
      options = { returnDuplicates: true };

    const result = permutate(input, options);

    expect(result).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 1, 1]
    ]);
  });

  it("should return permutations without repetition if input has duplicates but returning of duplicates is disabled", () => {
    const input = [1, 1, 2],
      options = { returnDuplicates: false };

    const result = permutate(input, options);

    expect(result).toEqual([
      [1, 2],
      [2, 1]
    ]);
  });

  it("should return permutations without repetition if input has duplicates but returning of duplicates is disabled", () => {
    const input = [1, 1],
      options = { returnDuplicates: false };

    const result = permutate(input, options);

    expect(result).toEqual([[1]]);
  });
});
