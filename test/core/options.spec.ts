import { getOptions } from '../../lib/core/options';
import { CutOffLogLevel, CutOffStrategy } from '../../lib';

describe('Options', () => {
  it('should return default options if no options are given', () => {
    const result = getOptions();

    expect(result).toStrictEqual({
      returnDuplicates: false,
      maxResultEntries: Infinity,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    });
  });

  it.each([
    [false],
    [true],
  ])('should return options with given returnDuplicates option', (returnDuplicates: boolean) => {
    const result = getOptions({
      returnDuplicates,
    });

    expect(result).toStrictEqual({
      returnDuplicates,
      maxResultEntries: Infinity,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    });
  });

  it.each([
    [1],
    [10],
    [100],
  ])('should return options with given maxResultEntries option', (maxResultEntries: number) => {
    const result = getOptions({
      maxResultEntries,
    });

    expect(result).toStrictEqual({
      returnDuplicates: false,
      maxResultEntries,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    });
  });

  it('should return options with given cutOffStrategy option', () => {
    const result = getOptions({
      cutOffStrategy: CutOffStrategy.linear,
    });

    expect(result).toStrictEqual({
      returnDuplicates: false,
      maxResultEntries: Infinity,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel: CutOffLogLevel.warn,
    });
  });

  it.each([
    [CutOffLogLevel.off],
    [CutOffLogLevel.warn],
  ])('should return options with given cutOffLogLevel option', (cutOffLogLevel: CutOffLogLevel) => {
    const result = getOptions({
      cutOffLogLevel,
    });

    expect(result).toStrictEqual({
      returnDuplicates: false,
      maxResultEntries: Infinity,
      cutOffStrategy: CutOffStrategy.linear,
      cutOffLogLevel,
    });
  });
});
