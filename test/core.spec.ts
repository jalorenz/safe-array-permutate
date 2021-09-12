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
    };

    safePermutate(input);

    expect(utils.permutate).toHaveBeenCalledWith(input, defaultOptions);
  });

  it.each([[false], [true]])(
    'should call permutate util function with given input and options',
    (returnDuplicates: boolean) => {
      const input = [1, 2];
      const options: IPermutateOptions = {
        returnDuplicates,
      };

      safePermutate(input, options);

      expect(utils.permutate).toHaveBeenCalledWith(input, options);
    },
  );
});
