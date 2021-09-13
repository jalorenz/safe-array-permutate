import {
  CutOffLogLevel,
  CutOffStrategy,
  IPermutateOptions,
  safePermutate,
} from '../lib';
import * as utils from '../lib/utils';

jest.mock('../lib/utils', () => ({
  permutate: jest.fn(),
}));

describe('Core', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call permutate function with default options', () => {
    const input = [1, 2];
    const defaultOptions: IPermutateOptions = {
      returnDuplicates: false,
      maxResultEntries: Infinity,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    };

    safePermutate(input);

    expect(utils.permutate).toHaveBeenCalledWith(input, defaultOptions);
  });

  it.each([[false], [true]])(
    'should call permutate function with given option parameter: %s for returning of duplicates',
    (returnDuplicates: boolean) => {
      const input = [1, 2];
      const options: IPermutateOptions = {
        returnDuplicates,
        maxResultEntries: Infinity,
        cutOffStrategy: CutOffStrategy.linear,
        cutOffLogLevel: CutOffLogLevel.warn,
      };

      safePermutate(input, options);

      expect(utils.permutate).toHaveBeenCalledWith(input, options);
    },
  );

  it.each([
    [10],
    [100],
    [1000],
  ])('should call permutate function with given option parameter: %s for the max. length of returned entries', (maxResultEntries: number) => {
    const input = [1, 2];
    const options: IPermutateOptions = {
      maxResultEntries,
      returnDuplicates: false,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    };

    safePermutate(input, options);

    expect(utils.permutate).toHaveBeenCalledWith(input, options);
  });

  it.each([
    [CutOffStrategy.linear],
    [CutOffStrategy.random]
  ])('should call permutate function with given option parameter: %s for cut off strategy', (cutOffStrategy: CutOffStrategy) => {
    const input = [1, 2];
    const options: IPermutateOptions = {
      maxResultEntries: Infinity,
      returnDuplicates: false,
      cutOffStrategy,
      cutOffLogLevel: CutOffLogLevel.warn,
    };

    safePermutate(input, options);

    expect(utils.permutate).toHaveBeenCalledWith(input, options);
  })
});
