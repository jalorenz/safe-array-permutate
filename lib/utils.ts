// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
export function factorialize(num: number): number {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

export function computeCombinationsLength(
  input: any[],
  replication: boolean
): number {
  if (input.length === 0) {
    return 0;
  }

  return replication ? 0 : factorialize(input.length);
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
/* istanbul ignore next */
export function shuffle(input: any[]): any[] {
  const shuffled = new Array(...input);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    let tmp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = tmp;
  }
  return shuffled;
}

export function getReplication(replication?: boolean): boolean {
  return replication || false;
}
