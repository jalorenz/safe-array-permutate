import permutate from "~lib/core"

describe("Core", () => {
    it("should return the given input if input length is 1", () => {
        const input = [1]
        
        const result = permutate(input)

        expect(result).toEqual(input)
    })

    it("should return the permutation without repetition", () => {
        const input = [1, 2]

        const result = permutate(input)

        expect(result).toEqual([[1, 2], [2, 1]])
    })
})