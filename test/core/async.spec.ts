import {
  CutOffLogLevel, CutOffStrategy, IPermutateOptions, safePermutateAsync,
} from '../../lib';
import * as options from '../../lib/core/options';
import * as utils from '../../lib/utils';

describe('Async', () => {
  it.each([
    [true],
    [false],
  ])('should resolve when called with given input and result of getOptions', async (returnDuplicates: boolean) => {
    const input = [1, 2];
    const returnedOptions: IPermutateOptions = {
      returnDuplicates,
      maxResultEntries: 2,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.off,
    };
    jest.spyOn(options, 'getOptions').mockReturnValue(returnedOptions);

    const delegate = safePermutateAsync(input);

    await expect(delegate).resolves.toStrictEqual([
      [1, 2],
      [2, 1],
    ]);
  });

  it('should reject if permutate function throws error', async () => {
    const input = [1, 2];
    const error = new Error();
    jest.spyOn(utils, 'permutate').mockImplementation(() => {
      throw error;
    });

    const delegate = safePermutateAsync(input);

    await expect(delegate).rejects.toThrow(error);
  });
});
