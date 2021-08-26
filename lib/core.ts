import { permutate } from "./utils";

export default function safePermutate<T>(input: T[]) : T[][] {
    return permutate(input)
}