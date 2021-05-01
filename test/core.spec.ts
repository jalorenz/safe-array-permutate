import permutate from "~lib/core";
import { PermutateMode } from "~lib/interfaces";
import * as utils from "~lib/utils";

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

  it.each([[{}], [undefined]])(
    "should throw error if given max combinations length is undefined",
    (options: any) => {
      expect(() => permutate([{ key: 1 }, { key: 2 }], options)).toThrowError(
        Error
      );
    }
  );

  it.each([[true], [false]])(
    "should call getReplication with given replication parameter",
    (replication: boolean) => {
      const spy = jest.spyOn(utils, "getReplication");

      permutate([{ key: 1 }, { key: 2 }], {
        mode: PermutateMode.random,
        replication,
        maxComputationLength: 10000
      });

      expect(spy).toBeCalledWith(replication);
    }
  );

  it.each([
    [[{ key: 1 }, { key: 2 }], 2],
    [[{ key: 1 }, { key: 2 }, { key: 3 }], 8]
  ])(
    "should call shuffle with computed combinations length if maxComputationLength is not defined",
    (input: any, expectedCalls: number) => {
      const spy = jest.spyOn(utils, "shuffle");

      permutate(input, {
        mode: PermutateMode.random
      });

      expect(spy).toBeCalledTimes(expectedCalls);
    }
  );

  it.each([
    [[{ key: 1 }, { key: 2 }], 2],
    [[{ key: 1 }, { key: 2 }, { key: 3 }], 8]
  ])(
    "should call shuffle as often as combinations are available",
    (input: any[], expectedCalls: number) => {
      const spy = jest.spyOn(utils, "shuffle");

      permutate(input, {
        mode: PermutateMode.random,
        maxComputationLength: 10000
      });

      expect(spy).toBeCalledTimes(expectedCalls);
    }
  );
});
