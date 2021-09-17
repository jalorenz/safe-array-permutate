import {
  CutOffLogLevel, CutOffStrategy, IPermutateOptions, safePermutateCallback,
} from '../../lib';
import * as options from '../../lib/core/options';
import * as utils from '../../lib/utils';

describe('Callback', () => {
  it.each([
    [true],
    [false],
  ])('should callback result of permutate function called with input and result from getOptions', (returnDuplicates: boolean) => {
    const input = [1, 2];
    const callbackMock = jest.fn();
    const returnedOptions: IPermutateOptions = {
      returnDuplicates,
      maxResultEntries: 2,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.off,
    };
    jest.spyOn(options, 'getOptions').mockReturnValue(returnedOptions);

    safePermutateCallback(input, callbackMock);

    expect(callbackMock).toHaveBeenCalledWith(null, [
      [1, 2],
      [2, 1],
    ]);
  });

  it('should callback error if permutate function throws', () => {
    const input = [1, 2];
    const callbackMock = jest.fn();
    const error = new Error();
    jest.spyOn(utils, 'permutate').mockImplementation(() => {
      throw error;
    });

    safePermutateCallback(input, callbackMock);

    expect(callbackMock).toHaveBeenCalledWith(error);
  });
});
