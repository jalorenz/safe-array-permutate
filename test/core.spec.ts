import { PermutationOptions } from '../lib/contracts';
import { safePermutate } from '../lib/core';
import { InvalidMaxLengthError } from '../lib/errors';

describe('Core', () => {
  it('should return the given input if input length is 1', () => {
    const input = [1];

    const result = safePermutate(input);

    expect(result).toEqual([input]);
  });

  it('should return the full permutation without repetition', () => {
    const input = [1, 2];

    const result = safePermutate(input);

    expect(result).toEqual([[1, 2], [2, 1]]);
  });

  it('should throw InvalidMaxLengthError if given maxLength is 0', () => {
    const options: PermutationOptions = {
      maxLength: 0,
    };
    const input = [1, 2];

    expect(() => safePermutate(input, options)).toThrowError(InvalidMaxLengthError);
  });

  it.skip('should return the permutation limited by given maxLength', () => {
    const options: PermutationOptions = {
      maxLength: 1,
    };
    const input = [1, 2];

    const result = safePermutate(input, options);

    expect(result).toHaveLength(1);
  });
});
