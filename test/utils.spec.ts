import { permutate } from '../lib/utils';

describe('Utils', () => {
  it('should return the given input if input length is 1', () => {
    const input = [1];

    const result = permutate(input);

    expect(result).toEqual([input]);
  });

  it('should return the full permutation without repetition', () => {
    const input = [1, 2];

    const result = permutate(input);

    expect(result).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });
});
