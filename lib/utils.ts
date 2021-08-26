// https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979
export function permutate<T>(input: T[]) : T[][] {
    var length = input.length,
        result = [input.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = input[i];
        input[i] = input[k];
        input[k] = p;
        ++c[i];
        i = 1;
        result.push(input.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }

    return result;
  }