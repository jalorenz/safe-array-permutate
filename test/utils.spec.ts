import {
  computeCombinationsLength,
  factorialize,
  getReplication
} from "~lib/utils";

describe("Utils", () => {
  describe("factorialize()", () => {
    it("should return -1 if num is smaller than 0", () => {
      const result = factorialize(-2);

      expect(result).toEqual(-1);
    });

    it("should return 1 if num is 0", () => {
      const result = factorialize(0);

      expect(result).toEqual(1);
    });

    it.each([
      [5, 120],
      [7, 5040]
    ])("should return the expected number", (num: number, expected: number) => {
      const result = factorialize(num);

      expect(result).toEqual(expected);
    });
  });

  describe("computeCombinationsLength()", () => {
    it.each([[true], [false]])(
      "should return 0 for empty array and replication is either false or true",
      (replication: boolean) => {
        const result = computeCombinationsLength([], replication);

        expect(result).toEqual(0);
      }
    );

    it.each([
      [[{ key: 1 }, { key: 2 }], 2],
      [[{ key: 1 }, { key: 2 }, { key: 3 }], 6]
    ])(
      "should return the expected number of combinations for replication false",
      (input: any[], expectedCountOfCombinations: number) => {
        const result = computeCombinationsLength(input, false);

        expect(result).toEqual(expectedCountOfCombinations);
      }
    );

    it.each([[[{ key: 1 }, { key: 1 }, { key: 2 }], 0]])(
      "should return the expected number of combinations for replication true",
      (input: any[], expectedCountOfCombinations: number) => {
        const result = computeCombinationsLength(input, true);

        expect(result).toEqual(expectedCountOfCombinations);
      }
    );
  });

  describe("getReplication()", () => {
    it("should return false if no parameter is given", () => {
      const result = getReplication();

      expect(result).toEqual(false);
    });

    it("should return true if parameter is given with true", () => {
      const result = getReplication(true);

      expect(result).toEqual(true);
    });
  });
});
