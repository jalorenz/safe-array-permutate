import { permutate } from "./utils";

export function safePermutate<T>(input: T[]) : T[][] {
    return permutate(input)
}