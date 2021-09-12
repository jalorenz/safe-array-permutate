import { safePermutate, IPermutateOptions } from '../lib';
import * as utils from '../lib/utils';

jest.mock('../lib/utils', () => ({
  permutate: jest.fn(),
}));

describe('Core', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call permutate util function with given input and default options, if no options are given', () => {
    const input = [1, 2];
    const defaultOptions: IPermutateOptions = {
      returnDuplicates: false,
      maxResultEntries: Infinity,
    };

    safePermutate(input);

    expect(utils.permutate).toHaveBeenCalledWith(input, defaultOptions);
  });

  it.each([[false], [true]])(
    'should call permutate util function with given input and given option parameter: %s for returning of duplicates',
    (returnDuplicates: boolean) => {
      const input = [1, 2];
      const options: IPermutateOptions = {
        returnDuplicates,
        maxResultEntries: Infinity,
      };

      safePermutate(input, options);

      expect(utils.permutate).toHaveBeenCalledWith(input, options);
    },
  );

  it.each([
    [10],
    [100],
    [1000],
  ])('should call permutate function with given input and given option parameter: %s for the max. length of returned entries', (maxResultEntries: number) => {
    const input = [1, 2];
    const options: IPermutateOptions = {
      maxResultEntries,
      returnDuplicates: false,
    };

    safePermutate(input, options);

    expect(utils.permutate).toHaveBeenCalledWith(input, options);
  });
});
